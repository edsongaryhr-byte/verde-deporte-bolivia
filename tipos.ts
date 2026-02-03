
export type Category = 'Electrónicos' | 'Relojes' | 'Audio' | 'Fitness' | 'Gadgets' | 'Iluminación';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  stock: number;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  address: string;
  items: CartItem[];
  total: number;
  paymentMethod: 'QR' | 'ContraEntrega';
  status: 'Pendiente' | 'Completado' | 'Cancelado';
  date: string;
}
