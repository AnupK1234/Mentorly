import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Blog from "./components/blog";
import Event from "./components/event";
import Goals from "./components/goals";
import Mentor from "./components/mentor/Mentor";
import Mentee from "./components/mentee/Mentee";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/blogs" element={<Blog/>} exact/>
          <Route path="/events" element={<Event/>} exact/>
          <Route path="/goals" element={<Goals/>} exact/>
          <Route path="/mentor" element={<Mentor/>} exact/>
          <Route path="/mentee" element={<Mentee/>} exact/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
