import React from 'react';
import Carousel from '@brainhubeu/react-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '@brainhubeu/react-carousel/lib/style.css';



class CarouselC extends React.Component{
   render(){ 
   return(
    <Carousel>
      <div>
         <img/>
        </div>
        <div>
         <img/>
        </div>
    </Carousel>
   );
  }
}

export default CarouselC;