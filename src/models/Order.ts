import { ImageSourcePropType } from 'react-native';

export type OrderStatus = 'Pending' | 'In-Process' | 'Completed';

export interface OrderItem {
    id: string;
    image: ImageSourcePropType;
    category: string;
    name: string;
    price: string;
    qty: number;
    status: OrderStatus;
}

export interface Order {
    id: string;
    orderId: string;
    placedOn: string;
    items: OrderItem[];
    total: string;
}
