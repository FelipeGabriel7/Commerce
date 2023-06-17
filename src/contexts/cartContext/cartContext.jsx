import React, { useReducer } from "react";
import { cartState } from "./data";
import { reducerCart } from "./reducer";


export const CartContext = React.createContext();


export const CartProvider = ({ children }) => {

    const [state , dispatch] = useReducer(reducerCart , cartState)

    return <CartContext.Provider value={{ state , dispatch }}> {children} </CartContext.Provider>
}