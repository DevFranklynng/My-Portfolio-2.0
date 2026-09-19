import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppShell() {
  const { pathname } = useLocation();

  let footerVariant = "inner";
  let contactLabel = "Start a conversation";
  let contactHref = null;

  if (pathname === "/") {
    footerVariant = "home";
  } else if (pathname === "/contact") {
    footerVariant = "contact";
    contactLabel = "Send an Email";
    contactHref = "mailto:franklynokoronkwo104@gmail.com";
  }

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer variant={footerVariant} contactLabel={contactLabel} contactHref={contactHref} />
    </div>
  );
}

export default function App() {
  return <AppShell />;
}