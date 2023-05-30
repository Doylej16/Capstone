import React from "react";
import Navbar from "./navbar";

export default function About() {
  return (
<div>
  <Navbar />
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      style={{
        backgroundImage: 'url("/about.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="w-3/5 flex-grow bg-white bg-opacity-70 p-10">
        <div className="mt-10 mb-20">
          <h1 className="text-7xl text-center text-gray font-bold">MARVEL INFORMATION</h1>
        </div>
        <p className="text-3xl font-bold text-center text-gray">Welcome to the Marvel corporate website. Here you can find information about our company, headquarters, and latest news.</p>
        
        <div className="mt-20">
          <h2 className="text-4xl text-center  font-boldtext-gray font-bold mb-4">Company Information</h2>
          <p className="text-xl text-center font-bold text-gray">Marvel is a leading entertainment company renowned for its diverse roster of superheroes, comics, movies, and TV shows.</p>
          <p className="text-xl text-center font-bold text-gray">Founded in 1939, Marvel has become a global phenomenon and a beloved brand across the world.</p>
        </div>
        
        <div className="mt-20">
          <h2 className="text-4xl text-center text-gray font-bold mb-4">Headquarters</h2>
          <p className="text-xl text-center font-bold text-gray">Marvel's headquarters is located in New York City, USA.</p>
          <p className="text-xl text-center font-bold text-gray">Address: 123 Marvel Street, New York, NY 10001</p>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-gray font-bold py-3 px-8 rounded-full">Explore More</button>
        </div>
      </div>
    </div>
</div>
);
}