import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";

const apiUrl = "http://localhost:3700";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
        <Route path="/characters" element={<Characters apiUrl={apiUrl} />} />
        <Route path="/character/:id" element={<Character apiUrl={apiUrl} />} />
        <Route path="/comics" element={<Comics apiUrl={apiUrl} />} />
        <Route path="/signup" element={<SignUp apiUrl={apiUrl} />} />
        <Route path="/signin" element={<SignIn apiUrl={apiUrl} />} />
        <Route path="/favorites" element={<Favorites apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
