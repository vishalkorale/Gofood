import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const CustomCarousel = () => {
  return (
    <div>
      
      <Carousel data-bs-theme=" bg-success ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/900x700/?burger"
          alt="First slide"
        />
        {/* <Carousel.Caption>
        <Form className="d-flex outline-light ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                  />
                  <Button variant="outline-light bg-success ">Search</Button>
                </Form>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/900x700/?Barbeque"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/900x700/?chocolatecake"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CustomCarousel
