import React from 'react'
import { useState, useEffect } from 'react'
import Restcard from './Restcard'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restlist() {

    //create a state
    const [AllRestaurants, setAllRestaurant]=useState([])

    //function to call API to get data from restaurant.json

    const getRestaurants = async()=>{
        await fetch('./restaurants.json')
        .then((data)=>{
            data.json()
            .then ((result)=>{
                // console.log(result);//array of data in console

                setAllRestaurant(result.restaurants)
            })
            // console.log(data);
        })
    }

    console.log(AllRestaurants);

    useEffect(()=>{
        getRestaurants()
    },[])




  return (
    <div>
        <Row>
        
       { 
       AllRestaurants.map((item)=>(

          
        <Restcard restaurant={item}/>
            

        // <h1>{item.name}</h1>
       ))
       }
       
       </Row>
      
    </div>
  )
}

export default Restlist