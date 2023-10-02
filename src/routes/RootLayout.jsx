import { Outlet } from "react-router-dom";
import Greet from "../components/Greet"

export default function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}