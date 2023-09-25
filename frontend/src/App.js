import "../src/styles/App.css";
import GetAllDetails from "../src/components/GetAllDetails";
import Insert from "../src/components/Insert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../src/components/Search";
import Delete from "../src/components/Delete";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <div className="d-grid ">
          <Navbar />
        </div>
        <div className="d-grid m-8 min-vh-100">
          <Routes>
            {/* I create three route here for 3 operation insertion seach and getall data from database */}
            <Route path="/" element={<Insert />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/getAll" element={<GetAllDetails />}></Route>
            <Route path="/delete" element={<Delete />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route />
          </Routes>
        </div>
        <div className="d-grid gap-auto">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Hello
