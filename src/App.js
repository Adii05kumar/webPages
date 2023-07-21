import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path={"/"} element={<Comp1/>} />
      <Route path={"/aboutUs"} element={<Comp2/>} />
      <Route path={"/contactUs"} element={<Comp3/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;