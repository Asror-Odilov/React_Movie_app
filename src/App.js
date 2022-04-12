import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import MoviePage from "./Pages/MovieInfo";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import OpenningLayer from "./Additions/OpenningLayer";




function App() {
  
  return (
    <div className="App">
        <OpenningLayer />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<Home />}  forceRefresh />
          <Route path="/movies" element = {<Movies />} />
          <Route path="/series" element = {<Series />} />
          <Route path="/movieinfo" element = {<MoviePage />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
        <Footer />
      </Router>
  
    </div>
  );
}

export default App;
