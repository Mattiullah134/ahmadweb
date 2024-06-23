import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Services from "./screens/Services";
import Blogs from "./screens/Blogs";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
