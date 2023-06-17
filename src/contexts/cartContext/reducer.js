import * as types from './types'

export const reducerCart = (state, action) => {

    console.log(action)

    switch (action.type) {
        case types.ADD_CART:
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            if (existingItem) {
                const updatedCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quant: item.quant + 1
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cart: updatedCart
                };
            }

            const newItem = {
                ...action.payload,
                quant: 1
            };

            return {
                ...state,
                cart: [...state.cart, newItem]
            };


        case types.REMOVE_CART:

            const filteredItem = state.cart.filter(st => {
                if (st !== action.payload) {
                    return st;
                }
            })

            return { ...state, cart: filteredItem, loading: false, error: false };


        case types.UPDATE_CART_ITEM:
            const UpdateItem = state.cart.find((item) => item.id === action.payload.id);

            if (UpdateItem) {
                const updatedCart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quant: item.quant + 1
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cart: updatedCart
                };
            }

        case types.REMOVE_CART_ITEM:

                const RemoveItem = state.cart.find((item) => item.id === action.payload.id);

                if (RemoveItem) {
                    const RemoveCart = state.cart.map((item) => {
                        if (item.id === action.payload.id) {

                            if(item.quant <= 0){
                                return {
                                    ...item,
                                    quant: 1
                                }
                            }

                            return {
                                ...item,
                                quant: item.quant - 1
                            };
                        }
                        return item;
                    });

                    return {
                        ...state,
                        cart: RemoveCart
                    };

                
                }


        case types.RESET_CART:
            return { ...state, cart: [], loading: false, error: false }
        case types.LOADING_CART:
            return { ...state, loading: true, error: false }
        case types.ERROR_CART:
            return { ...state, loading: false, error: true }
        case types.SUCESS_CART:
            return { ...state, loading: false, error: false }
        default:
            return { ...state }
    }

}