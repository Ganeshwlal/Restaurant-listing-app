// to fetch data from an api 

import axios from "axios"
import { R_FAILURE, R_SUCCESS } from "../constants/restconstant";

// xml http request for  fetch
// async await


export const RestListAction=()=>async(dispatch)=>{

    try{
        const result = await axios.get('./restaurants.json')
        console.log(result.data.restaurants);
        dispatch({
            type:R_SUCCESS,
            payload:result.data.restaurants
        })
    }

    catch(error){
        dispatch({
            type:R_FAILURE,
            error:error
        })
    }




 
}






