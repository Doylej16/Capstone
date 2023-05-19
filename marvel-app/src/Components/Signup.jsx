import React from "react";


export default function Signup() {
    return (
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
      <div
        className="max-w-md w-full px-6 py-8 bg-gray-400 bg-opacity-50 shadow-md rounded-md"
      >
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900">
                Email
              </label>
              <input
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
                Sign Up
              </button>
              <a href="/login" className="mt-3 flex items-center justify-center text-blue-100">
                <p className="items-center justify-center">Login</p>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }