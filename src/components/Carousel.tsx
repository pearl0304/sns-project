import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Key } from 'react';

export const Carousel = ({ images }: any) => {
  //console.log(images);
  const settings = {
    docs: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/*<Slider {...settings}>*/}
      {/*  {images.map((data: string | undefined, index: Key | null | undefined) => (*/}
      {/*    <div>*/}
      {/*      <img src={data} width={'400px'} height={'250px'} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</Slider>*/}
    </div>
  );
};
