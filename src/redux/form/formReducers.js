import { CLEAN_FORM_DATA, SET_FORM_DATA } from "./formTypes";
const initialState = {
    formData: {
        username:'',
        email:'',
        password:'',
    },
};
const pass='mod7ReactUSIP';
//agregar uno para clean
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                formData:{
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
        case CLEAN_FORM_DATA: {
            return {
                ...state,
                formData: initialState.formData, // Reinicia formData al estado inicial
            };
        }
        default:
            return state;
    }
};

export default formReducer;
export {pass};