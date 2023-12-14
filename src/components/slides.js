import './slides.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slides() {
    return (
        <div>
            <Carousel  indicators={false}>
                <Carousel.Item interval={3000}>
                    <img className='slide' src='./slide_dbsaude.jpg' alt=''></img>
                    <Carousel.Caption>
                        <p className='caption'>Tome decisões baseadas em dados.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className='slide' src='./slide_hand1.jpg' alt=''></img>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slides;