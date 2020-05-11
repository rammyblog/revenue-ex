// src/App.js
import React from "react"

import BaseRoutes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex flex-col mx-auto my-12 items-center">
        <BaseRoutes />
      </div>
    </Router>
  )
}

export default App
