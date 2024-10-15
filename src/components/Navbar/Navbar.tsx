import { Link } from "react-router-dom";
import { logo } from "../../assets";
import nav from "../../services/nav";
import { useState } from "react";
import Menu from "./Menu";

interface Props {
  bg?: boolean;
}

const Navbar = ({ bg }: Props) => {
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
      className={`${
        bg && "bg-white"
      } sticky top-0 container mx-auto lg:px-5 rounded-b-xl lg:pb-4 pt-1 py-1 pb-3`}
    >
      <div className="flex justify-between lg:p-0 px-5 py-1">
        <div className="">
          <img src={logo} alt="Logo" className="lg:w-28 w-24" />
        </div>

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
            className="btn-bg text-white text-sm shadow shadow-zinc-900 py-2 px-5 rounded-lg"
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
