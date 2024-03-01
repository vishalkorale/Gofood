import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CarouselCaption() {
  return (
    <div>
      <Carousel.Caption>
        <Form className="d-flex outline-light ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                  />
                  <Button variant="outline-light bg-success ">Search</Button>
                </Form>
        </Carousel.Caption>
    </div>
  )
}
