import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryStatus, setRecoveryStatus] = useState("");
  

  async function submit(e) {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:3100/login", {
        email,
        password,
      });
  
      // Redirect to localhost/
      window.location.href = "http://localhost:3000/";
    } catch (e) {
      console.log(e);
    }
  }

  async function recoverPassword(e) {
    e.preventDefault();

    try {
      await axios.post("https://localhost:3100/recover-password", {
        email: recoveryEmail,
      });

      setRecoveryStatus("Password recovery email sent");
    } catch (e) {
      console.log(e);
      setRecoveryStatus("Password recovery failed");
    }
  }  

  return (
    <div
      className="flex items-center justify-center min-h-screen "
      style={{
        backgroundImage: 'url("/marvel.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-md w-full px-6 py-8 bg-gray-400 bg-opacity-50 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form method="POST" onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
            <a
              href="/Signup"
              className="mt-3 flex items-center justify-center text-blue-100"
            >
              <p className="items-center justify-center">Sign up?</p>
            </a>
          </div>
        </form>

        <form method="POST" onSubmit={recoverPassword}>
          <div className="mt-6">
            <label htmlFor="recoveryEmail" className="block text-gray-900">
              Email for Password Recovery
            </label>
            <input
              onChange={(e) => setRecoveryEmail(e.target.value)}
              type="email"
              id="recoveryEmail"
              className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-400 hover:bg-gray-600 text-white font-semibold rounded-md shadow"
            >
              Recover Password
            </button>
          </div>
        </form>

        {recoveryStatus && (
          <p className="mt-4 text-gray-800">{recoveryStatus}</p>
        )}

      </div>
    </div>
  );
}

