import { Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/Holidays.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const Holidays = () => {
  const [placesData, setPlacesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/places`);
        if (response.data && Array.isArray(response.data)) {
          setPlacesData(response.data.slice(0, 3));
        } else {
          setPlacesData([]);
          setError('Data received is not in the expected format');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Failed to fetch data');
        setPlacesData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaceData();
  }, [apiUrl]);

  const handleBook = (place) => {
    const userData = JSON.stringify(place);
    localStorage.setItem("currentData", userData);
    navigate("/hotels");
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div id="holidays">
      <div id="text">
        <Heading>Find Popular Destinations</Heading>
        <div className="desc">
          <p>
            Escape the ordinary and explore the extraordinary - with our
            handpicked selection of destinations and travel deals, you will
            be able to create the trip of your dreams.
          </p>
        </div>

        <Button id="Explore">
          <Link to="/destinations">Explore More </Link>
        </Button>
      </div>
      <div id="holidaysContainer">
        {placesData.length > 0 ? (
          placesData.map((place) => (
            <div className="box" key={place.placeName}>
              <div className="holidayImage">
                <img src={place.imageURL} alt={place.placeName} />
              </div>
              <div className="content">
                <Heading>{place.placeName}</Heading>
                <h2>{place.tripDuration}</h2>
                <div className="bookingBox">
                  <div className="priceBox">
                    <span id="starts">Starts from</span>
                    <span id="price">${place.price} / person</span>
                  </div>
                  <Button
                    id="btn"
                    onClick={() => handleBook(place)}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No destinations available</div>
        )}
      </div>
    </div>
  );
};

export default Holidays;
