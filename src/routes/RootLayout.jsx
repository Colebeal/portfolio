import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export default function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}
