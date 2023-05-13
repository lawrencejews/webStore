export interface Cart{
  items: Array<CartItem>;
}

// Product Definition
export interface CartItem{
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}