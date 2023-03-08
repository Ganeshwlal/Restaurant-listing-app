import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./Reducers/restReducer";



const reducers=combineReducers({ 
    restaurantReducer:restaurantListReducer
 })
const middleware=[thunk]


//To create a store
const store =  createStore(reducers, applyMiddleware(...middleware))


export default store;








