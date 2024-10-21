import { Link } from "react-router-dom";
import { hero2 } from "../../assets";
import categories from "../../services/categories";

const funds = [2, 3, 5, 6, 7, 8];

const Fundrasings = () => {
  return (
    <div className="container mx-auto lg:px-0 px-3">
      <p className="lg:mt-20 text-xl">
        Discover fundraisers inspired by what you care about
      </p>

      <div className="lg:flex grid grid-cols-7 gap-x-3 justify-between mt-8">
        <select
          name="Category"
          className="col-span-5 h-11 lg:w-96 rounded-lg border  border-gray-300 focus:outline-none px-4"
        >
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        <div className="lg:space-x-3 space-x-2 col-span-2">
          <button className="border border-violet-500 rounded-lg active:text-white active:bg-green-600 hover:bg-gray-100 h-11 w-10 bi-arrow-left"></button>
          <button className="border border-violet-500 rounded-lg active:text-white active:bg-green-600 hover:bg-gray-100 h-11 w-10 bi-arrow-right"></button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
        {funds.map((f) => (
          <Link
            to={"/help"}
            key={f}
            className="transition-transform transform hover:-translate-y-1 hover:shadow-lg rounded-lg hover:shadow-zinc-300 lg:border-none border border-gray-200"
          >
            <img
              src={hero2}
              alt="Hero"
              className="lg:h-64 h-52 object-cover rounded-lg"
            />
            <div className="px-3 py-4">
              <h1 className="text-lg font-bold">Lorem Ipsum Dolor Emit</h1>
              <div className="relative mt-2">
                <div
                  className="absolute
           w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div
                    className="bg-secondary h-full"
                    style={{ width: `69%` }}
                  ></div>
                </div>
              </div>
              <p className="mt-6 text-sm">10.5k birr raised.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fundrasings;
