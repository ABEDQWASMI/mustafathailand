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
      imageURL: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      tripDuration: "3-5 Days",
      price: "Contact for Best Price",
      description: "Discover ancient temples and traditional culture"
    },
    {
      placeName: "Bali, Indonesia",
      imageURL: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      tripDuration: "6-8 Days",
      price: "Contact for Best Price",
      description: "Experience tropical paradise and Balinese culture"
    },
    {
      placeName: "Singapore",
      imageURL: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      tripDuration: "4-5 Days",
      price: "Contact for Best Price",
      description: "Explore the ultimate modern Asian metropolis"
    },
    {
      placeName: "Tokyo, Japan",
      imageURL: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      tripDuration: "7-10 Days",
      price: "Contact for Best Price",
      description: "Immerse yourself in Japanese culture and technology"
    },
    {
      placeName: "Seoul, South Korea",
      imageURL: "https://images.unsplash.com/photo-1617541086271-4d43983704b8",
      tripDuration: "6-8 Days",
      price: "Contact for Best Price",
      description: "Experience K-culture and modern Asian lifestyle"
    },
    {
      placeName: "Dubai, UAE",
      imageURL: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      tripDuration: "5-7 Days",
      price: "Contact for Best Price",
      description: "Discover luxury and desert adventures"
    },
    {
      placeName: "Hanoi, Vietnam",
      imageURL: "https://images.unsplash.com/photo-1557750255-c76072a7aad1",
      tripDuration: "4-6 Days",
      price: "Contact for Best Price",
      description: "Explore ancient streets and Vietnamese cuisine"
    },
    {
      placeName: "Kuala Lumpur, Malaysia",
      imageURL: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
      tripDuration: "4-6 Days",
      price: "Contact for Best Price",
      description: "Experience modern Malaysia and cultural diversity"
    },
    {
      placeName: "Siem Reap, Cambodia",
      imageURL: "https://images.unsplash.com/photo-1600111765736-e1d9f4814790",
      tripDuration: "3-5 Days",
      price: "Contact for Best Price",
      description: "Explore ancient Angkor temples and Khmer culture"
    },
    {
      placeName: "Muscat, Oman",
      imageURL: "https://images.unsplash.com/photo-1621680696874-edd80ce57b72",
      tripDuration: "5-7 Days",
      price: "Contact for Best Price",
      description: "Discover traditional Arabian charm and natural beauty"
    }
  ]);

  const navigate = useNavigate();

  const handleBook = (place) => {
    navigate("/contact", { state: { destination: place.placeName } });
  };

  return (
    <div id="holidays">
      <div id="text">
        <Heading>Discover Asia's Best Destinations</Heading>
        <div className="desc">
          <p>
            Experience the magic of Asia with our customized tour packages.
            Contact us for personalized itineraries and the best prices.
          </p>
        </div>
      </div>
      <div id="holidaysContainer">
        {placesData.map((place) => (
          <div className="box" key={place.placeName}>
            <div className="holidayImage">
              <img 
                src={place.imageURL} 
                alt={place.placeName}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=Destination+Image";
                }}
              />
            </div>
            <div className="content">
              <Heading size="md">{place.placeName}</Heading>
              <h2>{place.tripDuration}</h2>
              <p className="description">{place.description}</p>
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
