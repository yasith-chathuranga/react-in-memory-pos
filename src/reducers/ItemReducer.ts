import {Item} from "../models/Item";

export const initialState: Item[] = []

export function ItemReducer(state = initialState, action: {type: string, payload: Item}){
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload]
        case "UPDATE_ITEM":
            return state.map((item: Item) => item.code === action.payload.code ?
                {...item, code: action.payload.code, itemName: action.payload.itemName, qty: action.payload.qty}
                : item)
        case "DELETE_ITEM":
            return state.slice(0, -1)
        default:
            return state;
    }
}