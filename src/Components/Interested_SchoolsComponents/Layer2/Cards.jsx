import Container from '@mui/material/Container'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.images} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Cards