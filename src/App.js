import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Stock from "./components/Stock";
import Subscription from "./components/Subscription";
import Terms from "./components/Terms";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-slate-800 h-full w-full  text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/stock" element={<Stock />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
