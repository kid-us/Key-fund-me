import { Link, useLocation } from "react-router-dom";
import nav from "../../services/nav";

interface Props {
  //   username: string;
  //   balance: number;
  menu: string;
  onMenu: (val: boolean) => void;
}

const Menu = ({ menu }: Props) => {
  const location = useLocation();
  const path = location.pathname;

  //   const handleLogout = () => {
  //     logout();
  //     localStorage.clear();
  //     window.location.href = "/login";
  //   };

  return (
    <>
      <div
        className={`fixed animate__animated ${menu} top-16 mt-1 w-full left-0 z-20 h-[100dvh] px-5 pt-8`}
      >
        {nav.map((menus) => (
          <Link key={menus.icon} to={menus.path} className="flex mb-7">
            <p className={`${menus.icon} me-1`}></p>
            <p className={`${menus.path == path && "text-green-600"} text-lg `}>
              {menus.name}
            </p>
          </Link>
        ))}
        <Link to={"/sign-in"}>
          <p className="border-2 border-zinc-400 rounded-lg text-center py-3 mb-2 text-sm">
            Sign In
          </p>
        </Link>
        <Link to={"/"}>
          <p className="btn-bg text-white text-sm shadow shadow-zinc-900 py-3 text-center rounded-lg w-full">
            Start a KeyFundMe
          </p>
        </Link>
      </div>
    </>
  );
};

export default Menu;
