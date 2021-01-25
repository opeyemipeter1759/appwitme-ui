import React from 'react'
import image2 from '../img/img2.jpg'
import image8 from '../img/img8.jpg'
import image6 from '../img/img6.jpg'
import image7 from '../img/img7.png'
import Carousel from 'react-bootstrap/Carousel'
import './CarouselItem.scss'


function CarouselItem() {
    return (
        <div class="container-fluid">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 image1"
      src={image2}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Get your business 
        <br/>listed today on 
        <br/><img src={image7}/> </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image8}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image6}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselItem
