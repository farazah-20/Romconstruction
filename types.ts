export interface ServiceItem {
  title: string;
  description: string;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
}