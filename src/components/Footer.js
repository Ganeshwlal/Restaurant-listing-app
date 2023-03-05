import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div className=''>
         <Card className="text-center">
      <Card.Header>Address</Card.Header>
      <Card.Body>
        <Card.Title>Kochi | Kayamkulam | Trivandrum</Card.Title>
        <Card.Text>
        
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">Copyright @2023 W CAFE. All Rights Reserverd</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer