import React from "react";
import { useState } from "react";
import axios from "axios"


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function submit(e){
    e.preventDefault();

      try{

        await axios.post("https://localhost:3100/login",{
          email,password
        })

      }

      catch(e){

        console.log(e)

      }
  }

    return (
      <div
      className="flex items-center justify-center min-h-screen mr-2"
      style={{
        backgroundImage: 'url("/marvel.jpeg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="max-w-md w-full px-6 py-8 bg-gray-400 bg-opacity-50 shadow-md rounded-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form method="POST" onSubmit={(e) => {submit(e)}}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900">
                Email
              </label>
              <input
              onChange={(e) =>{setEmail(e.target.value)}}
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-900">
                Password
              </label>
              <input
              onChange={(e) =>{setPassword(e.target.value)}}
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gray-400 hover:bg-gray-600 text-white font-semibold rounded-md shadow"
              >
                Login
              </button>
              <a href="/Signup" className="mt-3 flex items-center justify-center text-blue-100">
                <p className="items-center justify-center">Sign up?</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }