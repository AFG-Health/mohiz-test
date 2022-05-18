import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index'
import action from './actions/fetchData'

const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        return (handlers[action.type] && handlers[action.type](state, action)) || state;
    }
}

const postReducer = createReducer(reducer.initialState, action.fetchData)

const rootReducer = combineReducers({
    posts: postReducer
})

export default createStore(rootReducer, {}, applyMiddleware(thunk));