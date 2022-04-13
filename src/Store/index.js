import {createStore, combineReducers} from "redux";
const todo = (state = [], action) => {
    switch (action.type) {
        case "SET_TODO":
            return action.todo;   
         default:
        return state;
    }
};

const counter= (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
const orgInitials= {
     name:"",
    employeeName:"",
    email:"",
    phone:"",
    state:"",
    city:"",
    postalCode:"",
    address:"",
};
    const orgDetails =(state = orgInitials,action)=>{
        switch(action.type){
            case "SET_ORG_DETAILS":
                return {
                    ...state,
                    [action.key]:action.value
                };
                case "RESET_ORG_DETAILS":
                    return orgInitials;
                
            default:
                return state;
        }
    };
    const orgDetailsError =(state= orgInitials,action)=>{
        switch(action.type){
            case "SET_ORG_DETAILS_ERROR":
                return {
                    ...state,
                    [action.key]:action.value
                };
           case "RESET_ORG_DETAILS_ERROR":
                return orgInitials;
            default:
                return state;
        }
    };
    

const reducer = combineReducers({
    todo,
    counter,
    orgDetails,
    orgDetailsError
});

const store = createStore(reducer);
    
export default store;
