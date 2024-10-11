import { useEffect, useState } from "react";
import { useFundStore } from "../../store/useCreateFund";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import categories from "../../services/categories";
import ContinueButton from "../Button/ContinueButton";
import { useNavigate } from "react-router-dom";
import BackButton from "../Button/BackButton";

const Category = () => {
  const { fundraise, addToFund } = useFundStore();

  const navigate = useNavigate();

  const [category, setCategory] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  //  Check if the previous form is filled
  useEffect(() => {
    if (
      fundraise.first_name === "" ||
      fundraise.last_name === "" ||
      fundraise.phone_number === "" ||
      fundraise.password === ""
    ) {
      navigate("/create/register");
    }
  }, [fundraise]);

  // Handle Continue
  const handleCategory = () => {
    // Validation
    if (category === "") {
      setError(true);
      return;
    }

    setError(false);

    setLoader(true);

    // Add to storage
    addToFund({
      category: category,
    });

    // Redirect
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        image="category"
        title="Tell us the Category"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          quis sequi provident, magnam illo ratione porro, nulla eius suscipit
          qui facilis. Nulla iure veritatis cupiditate atque quis modi
          necessitatibus a!"
      />

      {/* Fundraiser */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-6">Please Choose category</p>
          <p className="mb-5 text-gray-500">
            What best describes why you're fundraising?
          </p>

          <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
            {categories.map((c) => (
              <button
                onClick={() => setCategory(c.name)}
                key={c.id}
                className={`${
                  category === c.name &&
                  "bg-green-500 text-white border border-black shadow shadow-black"
                } border border-gray-400 rounded-lg px-3 py-3  text-center text-sm`}
              >
                {c.name}
              </button>
            ))}
          </div>
          {/* Error Message */}
          {error && (
            <p className="text-xs text-red-600 mt-2">
              {" "}
              <span className="bi-exclamation-triangle-fill"></span> Please
              choose category
            </p>
          )}

          <div className="flex justify-between mt-14 lg:gap-x-0 gap-x-3">
            <BackButton link="/create/register" />
            <ContinueButton loader={loader} onClick={() => handleCategory()} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Category;
