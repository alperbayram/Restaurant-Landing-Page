// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './style.css';
// import required modules
import { Pagination } from "swiper";
import { Image } from 'react-bootstrap';

const images = [
  { id: 1, href: './img/img1.png' },
  {
    id: 2,
    href: './img/img2.png',
  },
  { id: 3, href: './img/img5.png' },
  { id: 4, href: './img/img1.png' },
  {
    id: 5,
    href: './img/img2.png',
  },
];

export default function Carousels() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              src={image.href}
              alt="food"
              className="img-thumbnail border-0 bg-transparent"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
