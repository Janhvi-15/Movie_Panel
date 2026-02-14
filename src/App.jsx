import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";
import MovieContext from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
