/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
const initialState = {
    listUsers: []
};

export default (state, action) => {
    switch(action.type){
        case "fetch":
            return {
                listUsers: action.payload
            }
        default: 
        return state;
    }
}