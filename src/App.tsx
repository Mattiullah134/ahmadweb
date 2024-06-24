import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Services from "./screens/Services";

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
          </Routes>
        </Layout>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
