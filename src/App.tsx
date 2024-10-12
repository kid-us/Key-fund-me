import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import "animate.css";
import Verify from "./components/Pages/Verify";
import Create from "./components/Pages/Create";
import Register from "./components/Create/Register";
// import Category from "./components/Create/Category";
import Category from "./components/Create/Category";
import Info from "./components/Create/Info";
import Media from "./components/Create/Media";
import Verification from "./components/Create/Verification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/verify" element={<Verify />}></Route>

        {/* Create */}
        {/* Register */}
        <Route
          path="/create/register"
          element={<Create component={Register} />}
        ></Route>
        {/* Category */}
        <Route
          path="/create/category"
          element={<Create component={Category} />}
        ></Route>
        {/* Fundraising Info */}
        <Route
          path="/create/info"
          element={<Create component={Info} />}
        ></Route>
        {/* Media */}
        <Route
          path="create/media"
          element={<Create component={Media} />}
        ></Route>
        {/* Verification */}
        <Route
          path="create/verification"
          element={<Create component={Verification} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
