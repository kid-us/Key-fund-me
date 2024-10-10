import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import "animate.css";
import Verify from "./components/Pages/Verify";
import Create from "./components/Pages/Create";
import Fundraiser from "./components/Create/Fundraiser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        {/* Create */}
        <Route
          path="/create/fundraiser"
          element={<Create component={Fundraiser} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
