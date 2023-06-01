import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HeroDisplay = ({ heroSearch, addToFavorites }) => {
  const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
  const attributionText = 'Data provided by Marvel.';

  const handleAddToFavorites = () => {
    addToFavorites(heroSearch[0].id); // Pass the Marvel character ID to the addToFavorites function
  };

  return (
    <>
      <div className='flex justify-center'>
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
      </div>
    </>
  );
};

export default HeroDisplay;
