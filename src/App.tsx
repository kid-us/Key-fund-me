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
import Financial from "./components/Create/Financial";
import Detail from "./components/Pages/Detail";
import Terms from "./components/Pages/Terms";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/help" element={<Detail />} />

        {/* Create */}
        {/* Register */}
        <Route
          path="/create/register"
          element={<Create component={Register} />}
        />
        {/* Category */}
        <Route
          path="/create/category"
          element={<Create component={Category} />}
        />
        {/* Fundraising Info */}
        <Route path="/create/info" element={<Create component={Info} />} />
        {/* Media */}
        <Route path="create/media" element={<Create component={Media} />} />
        {/* Verification */}
        <Route
          path="create/verification"
          element={<Create component={Verification} />}
        />
        {/* Finance */}
        <Route
          path="create/bank-info"
          element={<Create component={Financial} />}
        />

        {/*  */}
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
