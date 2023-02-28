const initialState = {
    user : null
}

const reducer = (state = initialState, action) => {

// console.log("action",action);

switch(action.type){

case "REGISTRATION" :
     return {
            user:action.payload
            }

    case "UPDATE": 
        return {
            user:action.payload
               }   
            default : return state;
    }
}
export default reducer;