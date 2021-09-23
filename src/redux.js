//action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

//initial state of the application
const initialState = {
  fetching: false,
  dog: null,
  error: null,
};

//reducer - where your state will get revised/updated

export function reducer(state=initialState,action){
    switch(action.type){
        case API_CALL_REQUEST: 
            return {...state, fetching:true, error:null};
        case API_CALL_SUCCESS: 
            return {...state,fetching:false,dog:action.dog};
        case API_CALL_FAILURE:
            return {...state,dog:null,error: action.error};
        default:
            return state;
    }
}


