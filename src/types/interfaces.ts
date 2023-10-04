interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface Order {
  id: number;
  userId: number;
  products: Product[];
  status: string;
}
