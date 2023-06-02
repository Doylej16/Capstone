import React, {useState} from 'react'
import HeroDisplay from './HeroDisplay'


const FetchData = ({ currentUser }) => {
const [name, setName] = useState('')
const [marvel, setMarvel] = useState(null)
const [searchError, setSearchError] = useState(false)

function fetchMarvel(e) {

e.preventDefault()

fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
.then(res => res.json())
.then(result => {
  if (result.code === 409 && result.status === "name cannot be blank if it is set") {
  setSearchError(true)
  setMarvel(null)
  } else {
setMarvel(result.data.results.length > 0 ? result.data.results : null)
setSearchError(false)
setName('')
if(result.data.results.length === 0) {
   alert(`No data for ${name}`) 
}}
console.log(result);
});
}
  return (
    <>
<div className="">

<div className="flex justify-center hero-search">
    <input className="hero-search py-2 px-3 shadow-lg rounded-lg bg-gray-900 text-white mr-2" type="text" placeholder="Find your character..." value={name} onChange={(e) => setName(e.target.value)} />
    <button className=" py-2 px-4 transition duration-500 rounded-lg ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white" type="submit" onClick={fetchMarvel} >Search</button>
    </div>

    {/* <div className="flex justify-center button">
    <button className="py-2 px-4 transition duration-500 ease-in-out bg-gray-600 hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 text-white" type="submit" onClick={fetchMarvel} >Search</button>
    </div> */}
  </div>

  {searchError ? <p className="error flex font-semibold justify-center text-lg py-8">Error: Cannot leave name blank.</p> : null}

    {marvel !== null && <HeroDisplay  heroSearch = {marvel} />}
</>
  )
}
export default FetchData