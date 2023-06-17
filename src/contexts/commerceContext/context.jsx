import React, { useReducer } from "react";
import P from "prop-types";
import { reducerCommerce } from "./reducer";
import { productsCommerce } from "./state";



export const CommerceContext = React.createContext();


export const CommerceProvider = ( { children } ) => {

    const [state , dispatch] = useReducer(reducerCommerce , productsCommerce)


    return <CommerceContext.Provider value={{state , dispatch}}> {children} </CommerceContext.Provider>
}


CommerceProvider.propTypes = {
    children: P.node.isRequired,
}