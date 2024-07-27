import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Accordion from "./components/Accordian";
import SignUp from "./pages/SignUp";
import ListPage from "./pages/ListPage";
import UserProperty from "./pages/UserProperty";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
