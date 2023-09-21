import "../src/styles/App.css";
import GetAllDetails from "../src/components/GetAllDetails";
import Insert from "../src/components/Insert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../src/components/Search";
import Delete from "../src/components/Delete";
import Update from "./components/Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* I create three route here for 3 operation insertion seach and getall data from database */}
        <Route path="/" element={<Insert />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/getAll" element={<GetAllDetails />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
        <Route path="/update" element={<Update />}></Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Hello
