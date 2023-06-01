import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroDisplay = ({ heroSearch, addToFavorites }) => {
  const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
  const attributionText = 'Data provided by Marvel.';

  const handleAddToFavorites = () => {
    addToFavorites(heroSearch[0].id); // Pass the Marvel character ID to the addToFavorites function
  };

//used framer motion to add animation to card.
  return (
    <>
      <div className='flex justify-center'>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <Card style={{ width: '20rem' }}>
          <Card.Img
            className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            variant="top"
            src={thumbnail}
          />
          <Card.Body>
            <Card.Title className='text-lg'>Name: {heroSearch[0].name}</Card.Title>
            <Card.Text>
              <p className='font-mono text-lg'>{heroSearch[0].description}</p>
              <p className='font-mono text-lg'>{attributionText}</p>
            </Card.Text>
            <Button className='text-lg bg-green-600 rounded-md' variant="danger" onClick={handleAddToFavorites}>
              Add to Favorite
            </Button>
          </Card.Body>
        </Card>
        </motion.div>
      </div>
    </>
  );
};

export default HeroDisplay;
