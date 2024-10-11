import { Link } from "react-router-dom";
import { category, hello, info, logo, picture } from "../../assets";
import Navbar from "../Navbar/Navbar";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Sidebar = ({ description, title, image }: Props) => {
  return (
    <>
      {/* Small device Navbar */}
      <div className="lg:hidden block">
        <Navbar bg />
      </div>

      <div className="col-span-3 lg:ps-10 p-5">
        <Link to="/" className="lg:block hidden">
          <img src={logo} alt="Logo" className="absolute top-20 w-24" />
        </Link>
        <div className="flex items-center h-full">
          <div>
            <div>
              {/* Hello Image */}
              {image === "hello" && (
                <img src={hello} alt={hello} className="mb-7" />
              )}
              {/* Category Image */}
              {image === "category" && (
                <img src={category} alt={category} className="mb-7" />
              )}
              {/* Image Image */}
              {image === "info" && (
                <img src={info} alt={info} className="mb-7" />
              )}
              {/* Media Image */}
              {image === "picture" && (
                <img src={picture} alt={picture} className="mb-7" />
              )}
            </div>
            <p className="text-3xl font-extrabold mb-5">{title}</p>
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
