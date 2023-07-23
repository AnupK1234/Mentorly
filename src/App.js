import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Blog from "./components/blog";
import Event from "./components/event";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/blogs" element={<Blog/>} exact/>
          <Route path="/events" element={<Event/>} exact/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
