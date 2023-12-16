import Login from "./pages/Login.js";
import Daftar from "./pages/Daftar.js";
import Header from "./pages/Header.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </div>
  );
}

export default App;