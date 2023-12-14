import HomePage from "./pages/home.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/login.jsx"
import Navbar from "./components/Navbar/navbar.jsx"
import { useSelector } from 'react-redux';
import Products from "./pages/products.jsx";
import RecoveryPage from "./pages/recoveryPassword.jsx";
import RegisterPage from "./pages/register.jsx";
import CartPage from "./pages/cart.jsx";

function App() {
  const userRole = useSelector((state) => state.user.role)

  return (
    <BrowserRouter>
    <Navbar userRole={userRole}/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/recovery" element={<RecoveryPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
