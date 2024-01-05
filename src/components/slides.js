import './slides.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slides() {
    return (
        <div>
            <Carousel fade indicators={false}>
                <Carousel.Item interval={3000}>
                    <img className='slide' src='./assets/imgs/slide_dbsaude.jpg' alt=''></img>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='slide' src='./assets/imgs/slide_dbsaude1.jpg' alt=''></img>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='slide' src='./assets/imgs/slide_hand1.jpg' alt=''></img>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slides;