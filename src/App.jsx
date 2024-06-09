import "./assets/global.css";
import Header from "./assets/components/Header";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact.jsx";
import Triptype from "./pages/Triptype.jsx";
import Footer from "./assets/components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Triptype" element={<Triptype />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
