interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface ProductsInCart {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface Order {
  id: number;
  status: string;
  user: number;
  ordersProducts: OrderProducts[];
  timeStamp: string;
}

interface OrderProducts {
  quantity: number;
  product: Product;
}

interface Country {
  id: number;
  fullName: string;
  shortName: string;
  shippingCost: number;
}

interface User {
  id: number;
  address: string;
  email: string;
  roles: string;
  username: string;
}
interface UserPost {
  id: string;
  address: string;
  email: string;
  roles: string;
  username: string;
}

interface Shipment {
  id: number;
  email: string;
  destination: string;
  billingAddress: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  deliveryInstruction: string;
  country: Country;
  order: Order;
  gift: boolean;
}