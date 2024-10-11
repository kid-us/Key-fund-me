import { useState } from "react";
import BackButton from "../Button/BackButton";
import ContinueButton from "../Button/ContinueButton";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";

const Media = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState<boolean>(false);

  const alert = false;

  const handleSubmit = () => {
    setLoader(true);
    navigate("/media");
  };

  return (
    <>
      {/* Alert */}
      {alert && <Alert link="/register" start={3} />}

      {/* Sidebar */}
      <Sidebar
        image="picture"
        title="Add a cover photo or video"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
    quis sequi provident, magnam illo ratione porro, nulla eius suscipit
    qui facilis. Nulla iure veritatis cupiditate atque quis modi
    necessitatibus."
      />

      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-6">Upload Image</p>

          <div className="flex justify-between mt-14 lg:gap-x-0 gap-x-3">
            <BackButton link="/info" />
            <ContinueButton loader={loader} onClick={() => handleSubmit()} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Media;
