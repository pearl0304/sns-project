import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Key } from 'react';

export const Carousel = ({ images }: any) => {
  const settings = {
    docs: true,
  };

  return (
    <div>
      {images.map((data: string | undefined, index: Key | null | undefined) => (
        <Slider>
          <div key={index}>
            <img src={data} width={'500px'} height={'350px'} />
          </div>
        </Slider>
      ))}
    </div>
  );
};
