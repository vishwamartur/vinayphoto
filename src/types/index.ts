export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  location: string;
  date: string;
  style: string;
  featured?: boolean;
}

export interface Gallery {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  photos: Photo[];
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  message: string;
}

export interface User {
  username: string;
  isAuthenticated: boolean;
}