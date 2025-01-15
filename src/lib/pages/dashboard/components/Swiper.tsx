'use client';

import React from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Card from './SwiperCard'; // Assuming this is the correct path

const CardCarousel = () => {
  const cards = [
    {
      title: 'Star Sun Hotel & Apartment',
      imageUrl: '/assets/image/pixasquare-4ojhpgKpS68-unsplash.jpg',
      location: 'Jl Letda Nasir 45Rt 001/02',
      amount: '$80',
    },
    {
      title: 'Star Sun Hotel & Apartment',
      imageUrl: '/assets/image/pixasquare-4ojhpgKpS68-unsplash.jpg',
      location: 'Jl Letda Nasir 45Rt 001/02',
      amount: '$80',
    },
    {
      title: 'Star Sun Hotel & Apartment',
      imageUrl: '/assets/image/pixasquare-4ojhpgKpS68-unsplash.jpg',
      location: 'Jl Letda Nasir 45Rt 001/02',
      amount: '$80',
    },
    {
      title: 'Star Sun Hotel & Apartment',
      imageUrl: '/assets/image/pixasquare-4ojhpgKpS68-unsplash.jpg',
      location: 'Jl Letda Nasir 45Rt 001/02',
      amount: '$80',
    },
  ];

  return (
    <Box w="full" mx="auto" p={4}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              imageUrl={card.imageUrl}
              location={card.location}
              amount={card.amount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CardCarousel;
