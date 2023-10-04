interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
}

interface Order {
  id: number;
  userId: number;
  products: Product[];
  status: string;
}
