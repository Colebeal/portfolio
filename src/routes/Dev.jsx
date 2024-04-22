import { Outlet } from "react-router-dom"
import Nav from "../components/Dev/Nav"
import { useRef } from "react"

export default function Dev() {
  document.body.style.overflow = "auto"
  const aboutRef = useRef(null)
  const porfolioRef = useRef(null)
  const servicesRef = useRef(null)
  return (
    <>
      <Outlet />
    </>
  )
}
