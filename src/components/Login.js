import React from "react"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

function Login() {
  return (
    <>
      <div className="w-full text-center flex flex-col justify-center items-center ">
        <img
          src={logo}
          className="w-24 sm:w-16 md:2-16 lg:w-16 h-full"
          alt="revenueEx"
        />
        <p className="font-sans text-lg text-black">Sign In</p>
        <p className="font-sans text-lg text-black">
          Sign in to access your dashboard
        </p>

        <form className="px-8 pt-6 pb-8 mb-4 w-full sm:w-6/12 md:w-6/12 lg:w-1/3">
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              id="username"
              type="text"
              placeholder="Email address or Username"
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight  placeholder-black"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-deepBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-black text-lg text-center text-xs">
          Don't have an account?{" "}
          <span className="text-lightBlue font-bold">
            <Link to="/register/"> Log in</Link>
          </span>
        </p>
      </div>
    </>
  )
}

export default Login
