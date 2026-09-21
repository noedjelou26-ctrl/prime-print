export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  startingPrice: string;
  iconName: string;
  features: string[];
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'affiches' | 'textiles' | 'tableaux' | 'logos' | 'goodies';
  categoryLabel: string;
  image: string;
  altText: string;
  description: string;
  technique: string;
  client?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  quantity: string;
  deadline: string;
  message: string;
}
