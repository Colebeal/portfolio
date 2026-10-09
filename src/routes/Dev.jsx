import { Outlet } from "react-router-dom"
import { useEffect } from "react"

export default function Dev() {
  useEffect(() => {
    document.body.style.overflow = "auto"
  }, [])

  return <Outlet />
}
