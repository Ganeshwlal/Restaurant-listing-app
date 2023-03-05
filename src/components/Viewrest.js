import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';


function Viewrest() {

  const urlparams=useParams()
  console.log(urlparams);

  console.log(urlparams.id);


   //create a state
   const [AllRestaurants, setAllRestaurant]=useState([])

   //function to call API to get data from restaurant.json

   const getRestaurants = async()=>{
       await fetch('/restaurants.json')
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


   const viewrest = AllRestaurants.find(item=>item.id==urlparams.id)
   console.log(viewrest);




  return (
    <div>
{
  viewrest?(
    <Row>
      <Col md={4}>
      <Image fluid src={viewrest.photograph}/>
      </Col>

      <Col md={7}>
      <ListGroup>
      <ListGroup.Item><h1>{viewrest.name}</h1></ListGroup.Item>
      <ListGroup.Item><h6>{viewrest.cuisine_type}</h6></ListGroup.Item>

      <ListGroup.Item><h5>{viewrest.neighborhood}</h5></ListGroup.Item>
      <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>

      <ListGroup.Item>
        <Restop operate={viewrest.operating_hours} />
        </ListGroup.Item>

        <Restreview review={viewrest.reviews}/>



    </ListGroup>


      </Col>
    </Row>
  ):'null'
}


    </div>
  )
}

export default Viewrest