import React from 'react'
import { useState, useEffect } from 'react'
import Restcard from './Restcard'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restlist() {

    //create a state
    const [AllRestaurants, setAllRestaurant] = useState([])

    //function to call API to get data from restaurant.json

    const getRestaurants = async () => {
        await fetch('./restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        // console.log(result);//array of data in console

                        setAllRestaurant(result.restaurants)
                    })
                // console.log(data);
            })
    }

    console.log(AllRestaurants);

    const dispatch=useDispatch()

    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);

    const {restaurantList}=result;

    useEffect(() => {
        // getRestaurants()
        dispatch(RestListAction())
    }, [])

    return (
        <div>
            <Row>
                {
                    // restaurantList.map((item) => (
                        restaurantList?.map((item)=>(
                        <Restcard restaurant={item} />
                        // <h1>{item.name}</h1>
                    ))
                }
            </Row>
        </div>
    )
}

export default Restlist