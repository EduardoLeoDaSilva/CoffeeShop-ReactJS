import { produce } from "immer";
import { OrderState, ReducerAction } from "../contexts/OrderContext";

export function OrderReducer(state: OrderState, action: ReducerAction)  {
    switch (action.type) {
        case "ADD_CART_ITEM":
            return produce(state, (draft) => {
                draft.cart.items.push(action.payload)
                draft.cart.total = draft.cart.items.reduce((ac, current) => ac + (current.price * current.quant), 0)
            });
            break;

        case "REMOVE_CART_ITEM":
            return produce(state, (draft) => {
                const index = draft.cart.items.findIndex((x) => x.id == action.payload);
                draft.cart.items.splice(index, 1);

                if (draft.cart.items.length >=1) {
                    draft.cart.total = draft.cart.items.reduce((ac, current) => ac + (current.price * current.quant), 0)
                }else{
                    draft.cart.total = 0;
                }


            });
            break;

        case "UPDATE_CART_ITEM":
            return produce(state, (draft) => {
                if (action.payload.quant > 0) {
                    draft.cart.items.find(x => action.payload.id == x.id)!.quant = action.payload.quant
                    draft.cart.total = draft.cart.items.reduce((ac, current) => ac + (current.price * current.quant), 0)
                }
            });
            break;

        case "ADD_ORDER":
            return produce(state, (draft) => {
                draft.orders.push(action.payload)
                draft.lastOrder = action.payload;
            });
            break;

        case "CLEAR_CART":
            return produce(state, (draft) => {
                draft.cart.items = [];
                draft.cart.total = 0;

            });
            break;

        default:
            break;
    }
    return state;
}