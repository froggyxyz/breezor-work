import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sliderLeft, sliderRight } from '../icons/icons';
import './Slider.scss';
import { Navigation } from 'swiper';

const countries = [
  { id: 1, country: 'Саудовская Аравия' },
  { id: 2, country: 'Португалия' },
  { id: 3, country: 'Сент Винсент и Гренадины' },
  { id: 4, country: 'Франция' },
  { id: 5, country: 'Испания' },
  { id: 6, country: 'Мексика' },
];

const Slider = () => {
  const [heading, setHeading] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const headingRef = useRef(null);

  return (
    <div className="slider">
      <h2>{countries[heading]?.country}</h2>
      <button
        className={heading === 0 ? 'slider__left-invisible' : 'slider__left'}
        ref={navigationPrevRef}
      >
        <img src={sliderLeft} alt="left-btn" />
      </button>
      <button
        className={
          heading === countries.length - 1
            ? 'slider__right-invisible'
            : 'slider__right'
        }
        ref={navigationNextRef}
      >
        <img src={sliderRight} alt="right-btn" />
      </button>
      <Swiper
        className="slider__container"
        ref={headingRef}
        modules={[Navigation]}
        slidesPerView={'auto'}
        centeredSlides={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSlidePrevTransitionStart={() => setHeading(heading - 1)}
        onSlideNextTransitionStart={() => setHeading(heading + 1)}
      >
        {countries.map((country) => (
          <SwiperSlide className="slider__slide" key={country.id}>
            {country.country}
          </SwiperSlide>
        ))}
      </Swiper>
      <h3>Мир Breezzor огромный, исследуй его!</h3>
    </div>
  );
};

export default Slider;
