import React from "react"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <>
      <div className="w-full text-center flex flex-col justify-center items-center ">
        <img
          src={logo}
          className="w-24 sm:w-16 md:2-16 lg:w-16 h-full"
          alt="revenueEx"
        />
        <p className="font-sans text-lg text-black">Create Your Account</p>
        <p className="font-sans text-lg text-black">
          Signup for free with your email address
        </p>

        <form className="px-8 pt-6 mb-4 w-full sm:w-6/12 md:w-6/12 lg:w-1/3">
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="Email"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-4">
            <input
              className="appearance-none border border-black  w-full py-2 px-3 text-black leading-tight placeholder-black"
              type="text"
              placeholder="Address"
            />
          </div>
          <div class="mb-4 ">
            <div class="relative">
              <select class="block appearance-none w-full bg-white border border-black text-black py-3 px-4 pr-8 rounded leading-tight">
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Senegal</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-deepBlue w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create My Account
            </button>
          </div>
        </form>
        <p className="text-black text-lg text-center text-xs">
          Already have an account?
          <span className="text-lightBlue font-bold">
            <Link to="/login/"> Log in</Link>
          </span>
        </p>
      </div>
    </>
  )
}

export default SignUp
