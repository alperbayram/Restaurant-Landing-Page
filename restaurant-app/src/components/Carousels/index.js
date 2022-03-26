// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './style.css';
// import required modules
import { Navigation } from "swiper";
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
  const navigation = {
    clickable: true,
    renderBullet: function ( className) {
      return '<span class="' + className + '">'  + "</span>";
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={navigation}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              src={image.href}
              alt="food"
              className="img-fluid bg-transparent"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
