import { Heading, SimpleGrid, Box, Container } from "@chakra-ui/react";
import React from "react";
import "../styles/Flights.css";

const Flights = () => {
  const airlines = [
    {
      name: "Thai Airways",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thai_Airways_Logo.svg/2560px-Thai_Airways_Logo.svg.png",
      description: "Thailand's flag carrier with extensive Asian network"
    },
    {
      name: "Singapore Airlines",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Singapore-Airlines-Logo-1.png",
      description: "Award-winning service across Asia and beyond"
    },
    {
      name: "Emirates",
      logo: "https://1000logos.net/wp-content/uploads/2017/08/Emirates-Logo.png",
      description: "Connecting Asia through Dubai"
    },
    {
      name: "Korean Air",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Korean-Air-Logo.png",
      description: "Your gateway to South Korea"
    },
    {
      name: "Japan Airlines",
      logo: "https://1000logos.net/wp-content/uploads/2021/11/Japan-Airlines-Logo.png",
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
            <Box height="80px" mb={4}>
              <img 
                src={airline.logo} 
                alt={airline.name}
                style={{ 
                  height: '100%', 
                  width: 'auto',
                  objectFit: 'contain'
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
