export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ILogingProps {
  email: string;
  password: string;
}

export interface ILogingErrorProps {
  email?: string;
  password?: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface IRegisterErrorProps {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
}
