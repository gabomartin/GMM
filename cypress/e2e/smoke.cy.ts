describe('Smoke Test', () => {
  const routes = [
    {
      path: '/',
      assert: () => {
        cy.contains('DJ & Producer').should('be.visible');
      },
    },
    {
      path: '/bio',
      assert: () => {
        cy.get('app-section-block').should('have.length.at.least', 1);
      },
    },
    {
      path: '/music',
      assert: () => {
        cy.get('[role="tablist"][aria-label="Music catalog"]').should('be.visible');
      },
    },
    {
      path: '/dj-sets',
      assert: () => {
        cy.get('app-media-embed').should('have.length.at.least', 1);
      },
    },
    {
      path: '/gallery',
      assert: () => {
        cy.get('app-gallery-grid').should('be.visible');
      },
    },
    {
      path: '/services',
      assert: () => {
        cy.get('app-mastering-inquiry-form').should('be.visible');
      },
    },
    {
      path: '/contact',
      assert: () => {
        cy.get('app-contact-form').should('be.visible');
      },
    },
    {
      path: '/route-that-does-not-exist',
      assert: () => {
        cy.contains('Page not found').should('be.visible');
      },
    },
  ];

  beforeEach(() => {
    cy.on('uncaught:exception', (error) => {
      throw error;
    });
  });

  routes.forEach(({ path, assert }) => {
    it(`renders ${path} without errors`, () => {
      cy.visit(path, {
        onBeforeLoad(win) {
          win.sessionStorage.setItem('gabo-home-intro-seen', 'true');
        },
      });

      cy.get('app-root').should('be.visible');
      cy.location('pathname').should('eq', path);
      cy.location('hash').should('eq', '');
      assert();
    });
  });
});
