interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface Order {
  id: number;
  user: number;
  products: Product[];
  status: string;
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

interface shipment {
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