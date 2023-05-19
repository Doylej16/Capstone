import React from "react";

export default function About() {
    return(
        <div
      className="flex items-center justify-center min-h-screen "
      style={{
        backgroundImage: 'url("/marvel.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
            <h1>About page</h1>
        </div>
    )
}