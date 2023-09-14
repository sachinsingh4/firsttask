import "./App.css";
import GetAllDetails from "./GetAllDetails";
import Insert from "./Insert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* I create three route here for 3 operation insertion seach and getall data from database */}
        <Route path="/" element={<Insert />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/getAll" element={<GetAllDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Hello
