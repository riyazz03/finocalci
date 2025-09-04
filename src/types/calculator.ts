export interface InputField {
  name: string;
  label: string;
  type: 'currency' | 'percentage' | 'number' | 'date' | 'select';
  required: boolean;
  placeholder?: string;
  helpText?: string;
  unit?: string;
  validation?: {
    min?: number;
    max?: number;
  };
  options?: string[];
  order: number;
}

export interface OutputField {
  name: string;
  label: string;
  type: 'currency' | 'percentage' | 'number' | 'text';
  description?: string;
  order: number;
}

export interface Calculator {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  metaDescription?: string;
  keywords: string[];
  category: string;
  inputFields: InputField[];
  outputFields: OutputField[];
  formula: string;
  content?: string;
  views: number;
  featured: boolean;
  published: boolean;
  popularityScore: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  _id?: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  order: number;
  calculatorsCount: number;
  createdAt?: Date;
  updatedAt?: Date;
}