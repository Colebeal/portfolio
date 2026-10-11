import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { MotionConfig } from "framer-motion"

import AnimatedRoutes from "./routes/AnimatedRoutes"
import PortfolioDataProvider from "./sanity/PortfolioDataProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioDataProvider>
        <MotionConfig reducedMotion="user">
          <AnimatedRoutes />
        </MotionConfig>
      </PortfolioDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
