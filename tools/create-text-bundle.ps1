param(
    [string]$Root = (Resolve-Path "$PSScriptRoot\..").Path,
    [string]$Output = (Join-Path (Resolve-Path "$PSScriptRoot\..").Path "GMM.source-bundle.txt")
)

$ErrorActionPreference = "Stop"

$rootPath = (Resolve-Path $Root).Path
$outputPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Output)
$rootPrefix = $rootPath.TrimEnd([IO.Path]::DirectorySeparatorChar, [IO.Path]::AltDirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar
$excludedTopLevel = @(
    "node_modules",
    "restore-test"
)
$excludedFiles = @(
    "GMM.zip",
    "GMM.source-bundle.txt",
    "GMM.restore-bundle.txt"
)

$files = Get-ChildItem -LiteralPath $rootPath -File -Recurse -Force |
    Where-Object {
        $relative = $_.FullName.Substring($rootPrefix.Length)
        $parts = $relative -split '[\\/]'

        $parts[0] -notin $excludedTopLevel -and
        $_.Name -notin $excludedFiles -and
        $_.FullName -ne $outputPath
    } |
    Sort-Object FullName

$entries = foreach ($file in $files) {
    $relative = $file.FullName.Substring($rootPrefix.Length).Replace("\", "/")
    [ordered]@{
        path = $relative
        data = [Convert]::ToBase64String([IO.File]::ReadAllBytes($file.FullName))
    }
}

$bundle = [ordered]@{
    format = "codex-source-bundle-v1"
    createdUtc = (Get-Date).ToUniversalTime().ToString("o")
    sourceRoot = (Split-Path $rootPath -Leaf)
    excludedTopLevel = $excludedTopLevel
    excludedFiles = $excludedFiles
    files = $entries
}

$json = $bundle | ConvertTo-Json -Depth 5
[IO.File]::WriteAllText($outputPath, $json, [Text.UTF8Encoding]::new($false))
Write-Host "Wrote $($files.Count) files to $outputPath"
