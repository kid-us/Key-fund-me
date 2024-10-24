import { Link } from "react-router-dom";
import { logo, logo2 } from "../../assets";
import nav from "../../services/nav";
import { useState } from "react";
import Menu from "./Menu";

interface Props {
  bg?: boolean;
  sticky?: boolean;
}

const Navbar = ({ bg, sticky }: Props) => {
  // const access_token = localStorage.getItem("token");
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const [animationClass, setAnimationClass] = useState<string>(
    "animate__fadeInLeft"
  );

  const handleCloseMenu = () => {
    setAnimationClass("animate__fadeOutLeft");
    setTimeout(() => {
      setIsMenu(false);
      setAnimationClass("animate__fadeInLeft");
    }, 500);
  };

  return (
    <div
      className={`${bg && "bg-white"} ${
        !sticky && "sticky"
      } top-0 z-10 container mx-auto lg:px-5 rounded-b-xl lg:pb-4 lg:pt-2 pt-1 py-1 pb-3 bg-white`}
    >
      <div className="flex justify-between lg:p-0 px-5 py-1">
        <Link to="/">
          <img src={logo} alt="Logo" className="lg:block hidden w-20" />
          <img src={logo2} alt="Logo" className="lg:hidden block w-10" />
        </Link>

        {/* Large device Nav */}
        <div className="lg:block hidden space-x-16 mt-7">
          {nav.map((n) => (
            <Link key={n.id} to={`${n.path}`} className="hover:text-gray-500">
              {n.icon && <span className="bi-search me-2"></span>}
              {n.name}
            </Link>
          ))}
        </div>

        {/* Large device Nav */}
        <div className="lg:block hidden mt-7 space-x-14">
          <Link
            to={"/sign-in"}
            className="border border-zinc-400 rounded-lg px-5 py-1 text-sm"
          >
            Sign In
          </Link>
          <Link
            to={"/create/register"}
            className="bg-primary text-white text-sm shadow shadow-zinc-900 py-2 px-5 rounded-lg"
          >
            Start a KeyFundMe
          </Link>
        </div>

        {/* Small Device */}
        <div className="lg:hidden block mt-3">
          <button
            onClick={() => {
              isMenu === false ? setIsMenu(true) : handleCloseMenu();
            }}
            className={`${isMenu ? "bi-x-lg" : "bi-list"} text-2xl`}
          ></button>
        </div>

        {/* Menu */}
        {isMenu && (
          <Menu menu={animationClass} onMenu={() => handleCloseMenu()} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
