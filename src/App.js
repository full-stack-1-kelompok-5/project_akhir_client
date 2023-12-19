import Login from "./pages/Login.js";
import Daftar from "./pages/Daftar.js";
import Header from "./pages/Header.js";
import Waiters from "./pages/Waiters.js";
import AddMenu from "./pages/AddMenu.js";
import UpdateMenu from "./pages/UpdateMenu.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.js";
import Admin from "./pages/Admin.js";
import Kitchen from "./pages/Kitchen.js";
import Status from "./pages/Status.js";
import Order from "./pages/Order.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/kitchen" element={<Kitchen/>} />
        <Route path="/AddMenu" element={<AddMenu />} />
        <Route path="UpdateMenu" element={<UpdateMenu />} />
        <Route path="Status" element={<Status />} />
        <Route path="Order" element={<Order/>} />
      </Routes>
    </div>
  );
}

export default App;