import {createContext, useReducer} from "react";
import {initialState, ItemReducer} from "../reducers/ItemReducer";

export const ItemContext = createContext()

export function ItemProvider({children}) {

    const [items, dispatch] = useReducer(ItemReducer, initialState)

    return (
        <ItemContext.Provider value={[items, dispatch]}>
            {children}
        </ItemContext.Provider>
    );
}