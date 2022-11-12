import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselWrapper } from '../css/Carousel.styled';
import { Button } from '@mui/material';
import { useState } from 'react';

export const Carousel = ({ images }: any) => {
  const [picks, setPicks] = useState(images);

  const settings = {
    arrows: false,
    docs: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {images.map((data: any, index: number) => (
          <div key={data.id}>
            <img src={data.url} width={'400px'} height={'250px'} />
            <div style={{ position: 'absolute', top: '0px', backgroundColor: '#eee' }}>
              <Button>X</Button>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};
