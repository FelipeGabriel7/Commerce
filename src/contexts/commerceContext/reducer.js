import * as types from './types';

export const reducerCommerce = (state , action) => {

    switch(action.type){    
        case types.LOADING_ITEMS:
            return {...state , loading: true , error: false}
        case types.ERROR_ITEMS:
            return {...state , loading: false , error: true}
        case types.SUCESS_ITEMS: 
            return {...state , loading: false , error: false}
    }
    

    return {...state};
}