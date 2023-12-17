import Login from "./pages/Login.js";
import Daftar from "./pages/Daftar.js";
import Header from "./pages/Header.js";
import Waiters from "./pages/Waiters.js";
import Dashboard from "./pages/Dashboard.js";
import Home from "./pages/Home.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;