import React, {useState} from 'react'
import HeroDisplay from './HeroDisplay'
const FetchData = () => {
const [name, setName] = useState('')
const [marvel, setMarvel] = useState(null)
function fetchMarvel(e) {

e.preventDefault()

fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
.then(res => res.json())
.then(result => {
setMarvel(result.data.results.length > 0 ? result.data.results : null)
setName('')
if(result.data.results.length === 0) {
   alert(`No data for ${name}`) 
}
console.log(result);
});
}
  return (
    <>
<div className="bg-gray-400">

<div className="flex justify-center hero-search">
    <input className="hero-search py-2 px-3 shadow-lg bg-gray-900 text-white " type="text" placeholder="Find your character..." value={name} onChange={(e) => setName(e.target.value)} />
    <button className=" py-2 px-4 transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white" type="submit" onClick={fetchMarvel} >Search</button>
    </div>

    {/* <div className="flex justify-center button">
    <button className="py-2 px-4 transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white" type="submit" onClick={fetchMarvel} >Search</button>
    </div> */}
  </div>
    {(marvel !== null) ? <HeroDisplay  heroSearch = {marvel} /> : <p></p>}
</>
  )
}
export default FetchData