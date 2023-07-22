import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
