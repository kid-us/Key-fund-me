import Navbar from "../Navbar/Navbar";
import Hero from "../Home/Hero";
import Fundrasings from "../Home/Fundrasings";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className=";g:mx-32">
        <Navbar />

        <Hero />

        <Fundrasings />
      </div>
      <Footer />
    </>
  );
};

export default Home;
