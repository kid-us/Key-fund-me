import { Link } from "react-router-dom";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <div className="flex justify-center h-[90dvh] items-center overflow-hidden">
      <div>
        <p className="text-4xl text-green-600  font-extrabold text-center lg:mt-60 mb-10">
          Giving Hope, Changing Lives Globally
        </p>
        <Link to={"/create/register"} className="flex justify-center">
          <p className="text-center btn-bg text-white rounded-lg py-3 px-10">
            Start KeyFundMe
          </p>
        </Link>
        <img src={hero} alt="Hero" className="w-[1090px]" />
      </div>
    </div>
  );
};

export default Hero;
