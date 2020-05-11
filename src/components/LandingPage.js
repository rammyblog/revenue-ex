import React from "react"

import Typed from "react-typed"
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Typed
        strings={[
          "This is Team 95 React App, We are still brainstoming and trying to put the pieces together ",
        ]}
        typeSpeed={40}
      />
      <br />

      <Typed
        strings={["To login /login", "To register /register"]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input className="p-2 mt-3" type="text" disabled />
      </Typed>
      <div className="text-lightBlue flex font-bold mt-4">
        <Link className="px-4" to="/login/">
          Login Page
        </Link>
        <Link to="/register/">Register</Link>
      </div>
    </div>
  )
}

export default LandingPage
