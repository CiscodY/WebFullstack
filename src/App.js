import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Login } from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <NavBar />

        <main className="mx-auto w-full max-w-7xl px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
