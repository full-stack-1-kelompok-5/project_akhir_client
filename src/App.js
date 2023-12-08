import Login from "./components/Login";
import Daftar from "./components/Daftar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </div>
  );
}

export default App;