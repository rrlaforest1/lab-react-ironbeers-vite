import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/beers">
          <Route index element={<AllBeersPage />} />
          <Route path=":beerId" element={<BeerDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
