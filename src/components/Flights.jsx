import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Flights.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Flights = () => {
  const airlines = [
    {
      name: "Thai Airways",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thai_Airways_Logo.svg/2560px-Thai_Airways_Logo.svg.png",
      description: "Thailand's flag carrier with extensive Asian network"
    },
    {
      name: "Singapore Airlines",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Singapore-Airlines-Logo.png",
      description: "Award-winning service across Asia and beyond"
    },
    {
      name: "Emirates",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png",
      description: "Connecting Asia through Dubai"
    },
    {
      name: "Korean Air",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Korean-Air-Logo.png",
      description: "Your gateway to South Korea"
    },
    {
      name: "Japan Airlines",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Japan-Airlines-Logo.png",
      description: "Experience Japanese hospitality in the sky"
    }
  ];

  return (
    <div id="flights">
      <div className="flights-header">
        <Heading>Our Partner Airlines</Heading>
        <p>We work with the world's leading airlines to get you to your destination</p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {airlines.map((airline, index) => (
          <SwiperSlide key={index}>
            <div className="airline-card">
              <img src={airline.logo} alt={airline.name} />
              <h3>{airline.name}</h3>
              <p>{airline.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Flights;
