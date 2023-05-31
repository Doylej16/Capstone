import React from "react"
import HeroDisplay from "./HeroDisplay"
import FetchData from "./FetchData"
import Navbar from "./navbar"
import 'bootstrap/dist/css/bootstrap.min.css';







export default function Home() {
    return(
        <div>
          <Navbar/>
                  <div
      className="flex items-center justify-center h-100% "
      style={{
        backgroundImage: 'url("/marvel-wallpaper.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    > 
        <div className=" w-3/5 h-100% bg-white  justify-center">
          <div className="flex flex-row justify-center ">
            <h1 className="text-7xl text-center">The World of Marvel</h1>
            
          </div>
          <div>
          <FetchData/>
          </div>
          <div className="text-lg text-center"> Search for your favorite Marvel characters or Sign up to save your favorite characters to your profile. </div>
          <div className="grid grid-col-1 xl:grid-cols-2 mt-10">
              <div className="flex justify-center">
                <img className="h-auto max-w-sm rounded-lg ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/spiderman.jpeg" alt="" srcset="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl">The Amazing Spider Man</div>
                  <div className="text-md text-center">Spider-Man's most best-known spider-power, is his precognitive sixth sense referred to as his "spider-sense," which alerts him to danger which he is described as "untouchable" in combat. Being his most important superpower whenever danger is present, Spider-Man can feel the alert or a buzz inside his skull that tells him something dangerous is coming and he could detect and react immediately before it can happen.
                  </div>
              </div>
              
              
              <div className="flex flex-col justify-center items-center" >
                <div className="text-3xl">Iron Man</div>
                <div className="text-md text-center">Stark is injured by a booby trap and captured by enemy forces led by Wong-Chu. Wong-Chu orders Stark to build weapons, but Stark's injuries are dire and shrapnel is moving towards his heart. His fellow prisoner, Ho Yinsen, a Nobel Prize-winning physicist whose work Stark had greatly admired during college, constructs a magnetic chest plate to keep the shrapnel from reaching Stark's heart. In secret, Stark and Yinsen use the workshop to design and construct a suit of powered armor, which Stark uses to escape.
                </div>
              </div>
              <div className="flex justify-center  xl:order-none">
                  <img className="h-auto max-w-sm rounded-lg ml-2 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/ironman.jpg" alt="" srcset="" />
                </div>
                
                
                <div className="flex justify-center">
                  <img className="h-auto max-w-sm rounded-lg ml-2 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/thor1.jpg" alt="" srcset="" />
                </div>
                <div className="flex flex-col justify-center items-center" >
                <div className="text-3xl">Thor</div>
                <div className="text-md text-center">
                Thor was born to the King of the Asgardian Gods, Odin Borson, and the Earth Goddess Gaea. He grew up in Asgard under Odin's tutelage and trained in his footsteps to one day lead Asgard. Besides Odin, his stepmother Frigga and his adopted brother Loki are the only family he know, alongside his best friends Sif, Balder, and the Warriors Three.
                </div>
               </div>
          </div>
         
        </div>
        </div>
        </div>

        
    )};

