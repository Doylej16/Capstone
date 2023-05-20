import React from "react"


export default function Home() {
    return(
        
        <div
      className="flex items-center justify-center min-h-screen "
      style={{
        backgroundImage: 'url("/marvel-wallpaper.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
        <div className="flex w-3/5 h-screen bg-white opacity-75 justify-center">
          <div className="flex flex-row justify-center ">
            <h1 className="text-7xl ">The World of Marvel</h1>
          </div>
          <div className="flex flex-row">
              {/* <div><p>Spiderman</p></div> */}
          </div>
         
        </div>
        </div>
        
    )};