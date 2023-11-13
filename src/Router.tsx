import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import ChangePassword from "./pages/ChangePassword"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/change-password" element={<ChangePassword/>}/>
    </Routes>
  )
}

export default Router
