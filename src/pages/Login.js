import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );
      setToken(response.data.token);
      setError("");
      alert("Login successful! Token: " + response.data.token);
    } catch (err) {
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-gray-100 ">
      <div className="flex flex-col justify-center bg-white p-16 rounded-lg shadow-lg w-full lg:w-[50%] h-[90vh] max-w-md z-0">
        <h2 className="text-3xl font-bold text-red-600 ">Sign In</h2>
        <p className="text-sm  text-gray-400 mt-2">
          Enter your email and password to sign in!
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="mail@simmple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mt-1 mb-4 border rounded-md focus:ring-red-500 focus:border-red-500"
          />

          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mt-1 mb-4 border rounded-md focus:ring-red-500 focus:border-red-500"
          />

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Keep me logged in
            </label>
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
          >
            Sign In
          </button>
        </form>

        {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}
        {token && (
          <p className="text-green-600 mt-4 text-sm">
            Login successful! Token saved.
          </p>
        )}

        <p className="mt-4 text-sm text-center">
          Not registered yet?{" "}
          <a href="#" className="text-red-600 hover:underline">
            Create an Account
          </a>
        </p>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center  h-[90vh] bg-red-600 text-white p-12 z-10 rounded-bl-[4rem]">
        <div className="mb-10 flex w-[60%]">
          <img src="/abc.png" alt="Spark Logo" />
        </div>
        <div className="text-3xl font-light border rounded-xl py-2 px-16">
          <p className="mt-2 text-sm text-center">
            Learn more about Air Drive on Spark.pl
          </p>
          <h1 className="text-md font-light text-center">Spark.pl</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
