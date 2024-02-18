import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-detail" element={<CarDetail />} />
      </Routes>
    </>
  );
}

export default App;
