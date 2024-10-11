import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import "animate.css";
import Verify from "./components/Pages/Verify";
import Create from "./components/Pages/Create";
import Fundraiser from "./components/Create/Fundraiser";
// import Category from "./components/Create/Category";
import Category from "./components/Create/Category";

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
          path="/create/register"
          element={<Create component={Fundraiser} />}
        ></Route>

        <Route
          path="/create/category"
          element={<Create component={Category} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
