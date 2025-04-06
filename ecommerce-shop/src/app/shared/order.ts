export interface Order {
    orderId: string;
    customerId: string;
    orderDetails: OrderDetails[];
}
export interface OrderDetails{
  productId: string;
  orderId: string;
  quantity: number;
  adresa: string;
  total: number;
  paymentMethod: 'cash' | 'card' ;
  status: "ne pritje" |"konfirmuar"|"derguar"|"marre"|"marre dhe paguar"|"refuzuar";
}
