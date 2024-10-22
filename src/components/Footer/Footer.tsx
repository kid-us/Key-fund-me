import { Link } from "react-router-dom";
import { logo } from "../../assets";
import nav from "../../services/nav";

interface Footer {
  id: number;
  name: string;
  path: string;
}

const items: Footer[] = [
  {
    id: 1,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 3,
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    id: 4,
    name: "Terms and Conditions",
    path: "/terms",
  },
];

const categories: Footer[] = [
  {
    id: 1,
    name: "Medicine",
    path: "/",
  },
  {
    id: 2,
    name: "Family",
    path: "/",
  },
  {
    id: 3,
    name: "Sports",
    path: "/",
  },
  {
    id: 4,
    name: "Education",
    path: "/",
  },
  {
    id: 5,
    name: "Environment",
    path: "/",
  },
  {
    id: 6,
    name: "Emergencies",
    path: "/",
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-amber-100/30 mt-24 lg:pt-14 pt-8 pb-5">
      <div className="lg:mx-32 lg:px-0 px-4">
        <div className="grid lg:grid-cols-6 grid-cols-2">
          <div className="col-span-2 text-2xl font-bold lg:mb-0 mb-8">
            <img src={logo} alt="Logo" className="w-40" />
            <p className="lg:block hidden text-sm mt-14 font-light">
              <span className="font-bold">&copy;</span> 2017 KeyFundMe
            </p>
          </div>

          {/* Category */}
          <div>
            <p className="lg:col-span-2  mb-4 lg:text-lg text-gray-500">
              Category
            </p>
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`${c.path}`}
                className="block  mb-2 lg:text-md text-sm overflow-hidden hover:text-gray-500"
              >
                {c.name}
              </Link>
            ))}
          </div>

          {/* About */}
          <div>
            <p className=" mb-4 lg:text-lg text-gray-500">About</p>
            {items.map((nav) => (
              <Link
                key={nav.id}
                to={`${nav.path}`}
                className="block  mb-2 lg:text-md text-sm overflow-hidden hover:text-gray-500"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Explore */}
          <div className="lg:mt-0 mt-5">
            <p className=" mb-4 lg:text-lg text-gray-500">Explore</p>
            {nav.map((nav) => (
              <Link
                key={nav.id}
                to={`${nav.path}`}
                className="block  mb-2 lg:text-md text-sm overflow-hidden hover:text-gray-500"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="lg:mt-0 mt-5">
            <p className="mb-4 lg:text-lg text-gray-500">Social</p>
            <div className="flex gap-x-10">
              <Link to={"/"} className="bi-telegram text-lg text-cyan-500" />
              <Link to={"/"} className="bi-instagram text-lg text-pink-600" />
              <Link to={"/"} className="bi-facebook text-lg text-blue-600" />
            </div>
          </div>

          <p className="lg:hidden block text-xs mt-4 font-bold text-gray-500">
            <span className="font-bold">&copy;</span> 2017 KeyFundMe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
