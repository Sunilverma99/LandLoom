import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Accordion from "./components/Accordian";
import SignUp from "./pages/SignUp";
import ListPage from "./pages/ListPage";
import UserProperty from "./pages/UserProperty";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Ensure the correct path
import Footer from "./components/Footer"; // Ensure the correct path
import { Toaster } from 'react-hot-toast';
import AddUserProperty from "./pages/AddUserProperty";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Accordion />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/user-property" element={<UserProperty />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/add-property" element={<AddUserProperty/>} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
