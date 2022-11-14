import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselWrapper } from '../css/Carousel.styled';
import { Button } from '@mui/material';
import { useState } from 'react';

export const Carousel = ({ images, onDeleteImage }: any) => {
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
        {images.map((data: any) => (
          <div key={data.id}>
            <img src={data.url} width={'400px'} height={'250px'} />
            <div style={{ position: 'absolute', top: '0px', backgroundColor: '#eee' }}>
              <Button
                onClick={() => {
                  onDeleteImage(data.id);
                }}
              >
                X
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};
