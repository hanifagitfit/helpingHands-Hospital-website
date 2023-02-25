import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Docters from "./components/Docters";
import Main from "./components/Main";
import Hospitalservices from "./components/Hospitalservices";
import Facilities from "./components/Facilities";
import Testimenols from "./components/Testimenols";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/docters" element={<Docters />}></Route>
          <Route path="/services" element={<Hospitalservices />}></Route>
          <Route path="/facilities" element={<Facilities/>}></Route>
          <Route path="/testimonials" element={<Testimenols/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
