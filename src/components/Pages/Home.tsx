import { Link } from "react-router-dom";
import { hero } from "../../assets";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${hero})`,
            backgroundPosition: "top",
            height: "100%",
            backgroundSize: "100%",
            width: "100%",
            filter: "blur(3px)", // Only the image gets blurred
            position: "absolute",
            backgroundRepeat: "no-repeat",
            top: 50,
            left: 0,
            zIndex: -1, // Puts the background behind the content
          }}
        /> */}
      <Navbar />

      <div className="flex justify-center h-[90dvh] items-center overflow-hidden">
        <div>
          <p className="text-4xl text-green-600  font-extrabold text-center lg:mt-60 mb-10">
            Giving Hope, Changing Lives Globally
          </p>
          <Link to={"/"} className="flex justify-center">
            <p className="text-center btn-bg text-white rounded-lg py-3 px-10">
              Start KeyFundMe
            </p>
          </Link>
          <img src={hero} alt="Hero" className="w-[1090px]" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
