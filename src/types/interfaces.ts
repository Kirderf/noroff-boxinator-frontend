interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface Order {
  id: number;
  user: number;
  products: Product[];
  status: string;
}

interface User {
  id: number;
  address: string;
  email: string;
  roles: string;
  username: string;
}
