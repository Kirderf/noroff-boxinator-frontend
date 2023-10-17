/** @format */

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  isActive: boolean;
  width: number;
  depth: number;
  height: number;
  weight: number;
}

interface ProductsInCart {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
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

interface Shipment {
  id: number;
  email: string;
  order: number;
  billingAddress: string;
  deliveryInstruction: string;
  shippingAddress: string;
  city: string;
  phoneNumber: string;
  postalCode: string;
  status: string;
  timestamp: string;
  gift: boolean;
  user: number;
}
