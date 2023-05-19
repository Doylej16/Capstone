import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HeroDisplay = ({heroSearch}) => {
    const thumbnail = heroSearch[0].thumbnail.path + '.' + heroSearch[0].thumbnail.extension;
    const copyright = '© 2023 MARVEL';
    const attributionText = 'Data provided by Marvel. © 2023 MARVEL'
  return (
    <>
        <div className='flex justify-center bg-gray-400'>
        <Card style={{ width: '20rem' }}>
      <Card.Img className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title className='text-lg'>Name: {heroSearch[0].name}</Card.Title>
        <Card.Text>
    <p className='font-mono text-lg'>{heroSearch[0].description}</p>
    <p className='font-mono text-lg'>{attributionText}</p>
    <p className='font-mono text-lg animate-pulse'>{copyright}</p>
        </Card.Text>
        <Button className='text-lg' variant="danger">Add to Favorite</Button>
      </Card.Body>
    </Card>
    
    {/* <div className='flex justify-center bg-gray-400'> */}
    {/* <div className="h-640 min-w-640 max-w-screen-sm"> */}
    {/* <p class="flex justify-center animate-bounce w-6 h-6">Check Below</p> */}
    {/* <img className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={thumbnail} alt="hero" height= "25%" width="25%" />
    <p className="font-mono text-lg">Name: {heroSearch[0].name}</p>
    <p className='font-mono'>{heroSearch[0].description}</p>
    <p className='font-mono'>{attributionText}</p>
    <p className='font-mono'>{copyright}</p> */}
    {/* <p>{heroSearch[0].stories.available}</p>
    <p>{heroSearch[0].stories.items[0].name}</p>
    <p>{heroSearch[0].series.items[0].name}</p>
    <p>{heroSearch[0].events.items[1].name}</p> */}
    </div>
    {/* </div> */}
    </>
  )
}
<h2>{typeof heroSearch != "undefined"}</h2>

export default HeroDisplay