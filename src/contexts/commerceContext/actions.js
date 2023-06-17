import * as types from './types'

export const actionsLoading= (dispatch) => {

    if(types.LOADING_ITEMS){
       return dispatch({ type: types.LOADING_ITEMS})
    }

}

export const actionsSuccess = (dispatch) => {

    if(types.SUCESS_ITEMS){
        return dispatch({ type: types.SUCESS_ITEMS})
     }

}


export const actionsError = (dispatch) => {


    if(types.ERROR_ITEMS){
        return dispatch({ type: types.ERROR_ITEMS})
     }


}
    