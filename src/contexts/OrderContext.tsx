import { produce } from "immer";
import { ReactNode, createContext, useReducer } from "react";
import { OrderReducer } from "../reducers/OrderReducer";

export interface Item {
    id: string;
    image: string;
    name: string;
    quant: number;
    price: number;
}

export interface User {
    zipcode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string
    city: string;
    state: string;
    orders: []
}

export interface Order {
    id: string;
    payment: 'credit' | 'debit' | 'money'
    items: Item[]
    freight: number;
    total: number;
    customer: User
}

export interface Cart {
    items: Item[],
    freight: number;
    total: number,
}

export interface OrderState {
    cart: Cart
    lastOrder: Order | null;
    orders: Order[];
}

export interface OrderContextType {
    lastOrder: Order | null;
    cart: Cart | null;
    orders: Order[];
    addCartItem: (item: Item) => void;
    removeCartItem: (id: string) => void;
    addOrder: (order: Order) => void;
    clearCart: () => void;
    updateCartItem: (cartItem: { id: string, quant: number }) => void;
}

export const OrderContext = createContext({} as OrderContextType)

export interface ReducerAction {
    type: "CLEAR_CART" | "ADD_CART_ITEM" | "REMOVE_CART_ITEM" | "UPDATE_CART_ITEM" | "ADD_ORDER"
    payload: any
}

export interface OrderContextParameters {
    children: ReactNode;
}

export function OrderContextProvider({ children }) {

    const [state, dispatch] = useReducer(
        OrderReducer, {
        cart: {
            freight: 0,
            items: [],
            total: 0
        },
        lastOrder: null,
        orders: []
    }, (initialState) => {
        return initialState;
    })

    const orders = state.orders;
    const lastOrder = state.orders ? state.orders[0] : null;
    const cart = state.cart ? state.cart : null;
    function addCartItem(item: Item) {
        dispatch({ type: "ADD_CART_ITEM", payload: item })
    }

    function removeCartItem(id: string) {
        dispatch({
            type: 'REMOVE_CART_ITEM',
            payload: id
        })
    }

    function addOrder( order : Order) {
        dispatch({
            type: 'ADD_ORDER',
            payload: order
        })
    }

    function updateCartItem(cartItem: { id: string, quant: number }) {
        dispatch({ type: 'UPDATE_CART_ITEM', payload: cartItem })
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART", payload:''})
    }



    return (
        <OrderContext.Provider value={{ updateCartItem, cart, orders, lastOrder, addCartItem, removeCartItem, addOrder, clearCart }}>
            {children}
        </OrderContext.Provider>
    );

}