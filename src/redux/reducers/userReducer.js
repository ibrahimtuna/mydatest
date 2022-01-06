import {ACTION_TYPES} from "../actions/userActions";


const INITIAL_STATE = {
    token:null,
}



const userReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {...state,token:action.payload.token};
        case ACTION_TYPES.LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}


export default userReducer;
