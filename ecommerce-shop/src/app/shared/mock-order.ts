import {Order} from "./order";
export const ORDERS: Order[] = [
    {
        orderId: "1",
        customerId: "1",
        orderDetails: [
            {
                productId: "1",
                orderId: "1",
                quantity: 2,
                adresa: "Tirane, Albania",
                total: 200,
                paymentMethod: 'cash',
                status: "ne pritje"
            }
        ]
    },
    {
        orderId: "2",
        customerId: "2",
        orderDetails: [
            {
                productId: "2",
                orderId: "2",
                quantity: 1,
                adresa: "Sarande, Albania",
                total: 150,
                paymentMethod: 'card',
                status: "konfirmuar"
            }
        ]
    }
];