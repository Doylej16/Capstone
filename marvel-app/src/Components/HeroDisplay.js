import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const HeroDisplay = ({ heroSearch }) => {
  const [isAddingToFavorites, setIsAddingToFavorites] = useState(false);

  const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
  const attributionText = 'Data provided by Marvel.';

  const handleAddToFavorites = async () => {
    if (!isAddingToFavorites) {
      setIsAddingToFavorites(true);
      try {
        const response = await axios.post('http://localhost:3100/api/addToFavorites', {
          characterId: heroSearch[0].id,
        });
        console.log(response.data.message);
        // Handle success
      } catch (error) {
        console.error(error);
        // Handle error
      } finally {
        setIsAddingToFavorites(false);
      }
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <motion.div
          className='box'
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
              className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
              variant='top'
              src={thumbnail}
            />
            <Card.Body>
              <Card.Title className='text-lg'>Name: {heroSearch[0].name}</Card.Title>
              <Card.Text>
                <p className='font-mono text-lg'>{heroSearch[0].description}</p>
                <p className='font-mono text-lg'>{attributionText}</p>
              </Card.Text>
              <Button
                className='text-lg bg-green-600 rounded-md'
                variant='danger'
                onClick={handleAddToFavorites}
                disabled={isAddingToFavorites}
              >
                {isAddingToFavorites ? 'Adding to Favorites...' : 'Add to Favorites'}
              </Button>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default HeroDisplay;
