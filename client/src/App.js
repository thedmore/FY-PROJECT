import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import GovtOrg from "./components/pages/GovtOrg";
import Login from "./components/auth.jwt/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="govt-organization" element={<GovtOrg />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
