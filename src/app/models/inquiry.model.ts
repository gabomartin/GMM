export interface GeneralInquiryDraft {
  name: string;
  email: string;
  eventDate: string;
  location: string;
  serviceTitle?: string;
  message: string;
}

export interface MasteringInquiryDraft {
  name: string;
  serviceTitle: string;
  price: string;
  audioLinks: string;
  trackDetails: string;
}
