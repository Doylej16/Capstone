import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const HeroDisplay = ({ heroSearch, currentUser }) => {
  const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
  const attributionText = 'Data provided by Marvel';

  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/favorites');
      setFavorites(response.data);
    } catch (error) {
      setError('Failed to fetch favorites. Please try again later.');
    }
  };

  const addToFavorites = async (characterId) => {
    try {
      if (!currentUser || !currentUser.email) {
        setError('Current user not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:3100/api/addFavorite', {
        marvelCharacterId: characterId,
      });

      if (response.status === 200 && response.data.success) {
        fetchFavorites();
      } else {
        setError('Failed to add character to favorites. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred while adding the character to favorites. Please try again later.');
    }
  };

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      <div className="flex justify-center">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title className="text-lg">Name: {heroSearch[0].name}</Card.Title>
            <Card.Text>
              <p className="font-mono text-lg">{heroSearch[0].description}</p>
              <p className="font-mono text-lg">{attributionText}</p>
            </Card.Text>
            <Button
              className="text-lg bg-green-600 rounded-md"
              variant="danger"
              onClick={() => addToFavorites(heroSearch[0].id)}
            >
              Add to Favorites
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default HeroDisplay;

