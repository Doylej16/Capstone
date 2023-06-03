import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const HeroDisplay = ({ heroSearch }) => {
  const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
  const attributionText = 'Data provided by Marvel';

  const [favorites, setFavorites] = useState([]);
  const userEmail = 'jonathangutierrez1290@gmail.com';
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    setAuthenticated(isAuthenticated);
  }, []);

  const name = heroSearch[0].name;
  const description = heroSearch[0].description;
  const thumbnails = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;

  const addFavorites = (marvel) => {
    const newFavorite = [...favorites, marvel];
    setFavorites(newFavorite);

    // Check if the user is authenticated before sending the request
    if (authenticated) {
      // Send the favorite to the backend server
      axios
        .post('http://localhost:3100/api/favorites', {
          email: userEmail,
          name: name,
          thumbnail_url: thumbnails,
        })
        .then((response) => {
          console.log('Character added:', response.data);
        })
        .catch((error) => {
          console.error('Error adding character:', error);
        });
    } else {
      console.log('Please log in to add favorites');
    }
  };

  //used framer motion to add animation to card.
  return (
    <>
      <div className="flex justify-center">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Card style={{ width: '20rem' }}>
            <Card.Img
              className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              variant="top"
              src={thumbnail}
            />
            <Card.Body>
              <Card.Title className="text-lg">Name: {heroSearch[0].name}</Card.Title>
              <Card.Text>
                <p className="font-mono text-lg">{heroSearch[0].description}</p>
                <p className="font-mono text-lg">{attributionText}</p>
              </Card.Text>
              {authenticated ? (
                <Button className="text-lg bg-green-600 rounded-md" variant="danger" onClick={() => addFavorites(heroSearch[0])}>
                  Add to Favorites
                </Button>
              ) : (
                <p>Please log in to add favorites</p>
              )}
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default HeroDisplay;
