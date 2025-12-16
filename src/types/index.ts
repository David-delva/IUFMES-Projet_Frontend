export interface Program {
  id: number;
  name: string;
  slug: string;
  description: string;
  duration: string;
  degree: string;
  imageUrl?: string;
  isActive: boolean;
  teachers?: Teacher[];
}

export interface Teacher {
  id: number;
  name: string;
  title: string;
  specialty: string;
  imageUrl?: string;
  bio?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'PENDING' | 'READ' | 'ARCHIVED';
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  role: 'ADMIN' | 'STAFF';
}
