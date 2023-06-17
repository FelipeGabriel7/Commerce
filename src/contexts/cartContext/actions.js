import * as types from './types';


export const AddCart = (dispatch , item) => {
    return dispatch({ type: types.ADD_CART , payload: item })
}

export const RemoveCart = (dispatch , item ) => {
    dispatch({ type: types.REMOVE_CART , payload: item })
}

export const LoadingCart = (dispatch) => {
    dispatch({ type: types.LOADING_CART})
}

export const SuccessCart = (dispatch) => {
    dispatch({type: types.SUCESS_CART})
}

export const ResetCart = (dispatch) => {
    dispatch({type: types.RESET_CART})
}


export const RemoveItem = (dispatch , item) => {
    dispatch({type: types.REMOVE_CART_ITEM , payload: item})
}

export const UpdateItem = (dispatch , item) => {
    dispatch({type: types.UPDATE_CART_ITEM , payload: item})
}