import { Heading, SimpleGrid, Box, Container } from "@chakra-ui/react";
import React from "react";
import "../styles/Flights.css";

// Import images with exact filenames
import thaiAirways from "../assets/images/11.png";
import singaporeAirlines from "../assets/10.png";
import emirates from "../assets/png-clipart-emirates-logo-dubai-airbus-a380-emirates-airline-logo-dubai-text-american-airlines-thumbnail.png";
import koreanAir from "../assets/kisspng-korean-air-logo-airline-mactancebu-internationa-5b74cc53041123.6109000915343811390167.jpg";
import japanAirlines from "../assets/png-clipart-jal-japan-airlines-logo-japan-airlines-logo-icons-logos-emojis-iconic-brands-thumbnail.png";

const Flights = () => {
  const airlines = [
    {
      name: "Thai Airways",
      logo: thaiAirways,
      description: "Thailand's flag carrier with extensive Asian network"
    },
    {
      name: "Singapore Airlines",
      logo: singaporeAirlines,
      description: "Award-winning service across Asia and beyond"
    },
    {
      name: "Emirates",
      logo: emirates,
      description: "Connecting Asia through Dubai"
    },
    {
      name: "Korean Air",
      logo: koreanAir,
      description: "Your gateway to South Korea"
    },
    {
      name: "Japan Airlines",
      logo: japanAirlines,
      description: "Experience Japanese hospitality in the sky"
    }
  ];

  return (
    <Container maxW="container.xl" id="flights">
      <Box className="flights-header" mb={10}>
        <Heading>Our Partner Airlines</Heading>
        <p>We work with the world's leading airlines to get you to your destination</p>
      </Box>

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={8} 
        px={{ base: 4, md: 6 }}
      >
        {airlines.map((airline, index) => (
          <Box 
            key={index} 
            className="airline-card"
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
          >
            <Box className="logo-container">
              <img 
                src={airline.logo} 
                alt={airline.name}
                className="airline-logo"
                onError={(e) => {
                  console.error(`Failed to load image for ${airline.name}`);
                  e.target.src = 'https://via.placeholder.com/200x100?text=Airline+Logo';
                }}
              />
            </Box>
            <Heading size="md" mb={3}>{airline.name}</Heading>
            <p>{airline.description}</p>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Flights;
