import { hero } from "../../assets";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div
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
            filter: "blur(2px)", // Only the image gets blurred
            position: "absolute",
            backgroundRepeat: "no-repeat",
            top: 50,
            left: 0,
            zIndex: -1, // Puts the background behind the content
          }}
        />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
