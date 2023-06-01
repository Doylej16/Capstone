import React from 'react'
import FetchData from './FetchData'
import Navbar from './navbar';


function Characters() {
  return (
    <>
    <Navbar/>
      <div
      className="flex items-center justify-center h-100% h-auto"
      style={{
        backgroundImage: 'url("/marvel-wallpaper.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
    <div className="main border-none h-100%">
    <div className="card bg-white border-none h-100% min-h-screen">
    <h2 className="flex justify-center py-8">Search Your Favorite Character</h2>
    
    <FetchData />

    </div>
    </div>
    </div>
    </>
  )
}
export default Characters;