import { Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Holidays.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const Holidays = () => {
  const [placesData, setPlacesData] = useState([
    {
      placeName: "Bangkok, Thailand",
      imageURL: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
      tripDuration: "5-7 Days",
      price: "Contact for Best Price",
      description: "Experience the vibrant street life and temples of Bangkok"
    },
    {
      placeName: "Phuket, Thailand",
      imageURL: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
      tripDuration: "4-6 Days",
      price: "Contact for Best Price",
      description: "Relax on pristine beaches and explore island life"
    },
    {
      placeName: "Chiang Mai, Thailand",
      imageURL: "https://images.unsplash.com/photo-1599284223190-c4b1f644c13b?q=80&w=1000",
      backupImageURL: "https://images.unsplash.com/photo-1586931775007-a530539c1f3c",
      tripDuration: "3-5 Days",
      price: "Contact for Best Price",
      description: "Discover ancient temples and traditional culture"
    },
    // Add more destinations as needed
  ]);

  const navigate = useNavigate();

  const handleBook = (place) => {
    navigate("/contact", { state: { destination: place.placeName } });
  };

  return (
    <div id="holidays">
      <div id="text">
        <Heading>Discover Thailand's Best Destinations</Heading>
        <div className="desc">
          <p>
            Experience the magic of Thailand with our customized tour packages.
            Contact us for personalized itineraries and the best prices.
          </p>
        </div>
      </div>
      <div id="holidaysContainer">
        {placesData.map((place) => (
          <div className="box" key={place.placeName}>
            <div className="holidayImage">
              <img src={place.imageURL} alt={place.placeName} />
            </div>
            <div className="content">
              <Heading size="md">{place.placeName}</Heading>
              <h2>{place.tripDuration}</h2>
              <p>{place.description}</p>
              <div className="bookingBox">
                <div className="priceBox">
                  <span id="price">{place.price}</span>
                </div>
                <Button
                  id="btn"
                  colorScheme="teal"
                  onClick={() => handleBook(place)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holidays;
