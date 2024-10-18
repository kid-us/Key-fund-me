import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { hero2 } from "../../assets";

const Detail = () => {
  return (
    <div className="lg:mx-40">
      <Navbar sticky />
      <div className="lg:container lg:mx-auto grid lg:grid-cols-6 grid-cols-1 lg:gap-x-10 lg:mt-14 mt-5 lg:px-0 px-2">
        <div className="lg:col-span-4 w-full">
          <div className="">
            <img
              src={hero2}
              alt="Fundrasing iamge"
              className="rounded-xl lg:h-96 h-60 w-full object-cover"
            />
          </div>
          <p className="font-bold lg:my-5 my-3 text-2xl">
            Lorem Ipsum Dolor Emit.
          </p>

          <div className="lg:hidden block mb-4 mx-2">
            <p className="text-xl">
              $94,708 USD{" "}
              <span className="text-sm text-gray-500">
                raised of $100,000 goal
              </span>
            </p>

            <div className="relative mt-3">
              <div className="absolute w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-violet-500 h-full"
                  style={{ width: `69%` }}
                ></div>
              </div>
            </div>

            <p className="mt-9 text-sm text-gray-600">1.3K donations</p>

            <button className="w-full bg-violet-700 text-white h-12 rounded-lg shadow mt-3">
              Share
            </button>

            <button className="w-full bg-violet-700 text-white h-12 rounded-lg shadow mt-3">
              Donate Now
            </button>
          </div>

          <p className="font-bold mb-2">Description</p>

          <p className="lg:text-md text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab porro
            corporis perspiciatis eos quo sint nulla. Hic, autem quisquam? Cum
            corporis quidem omnis expedita similique magni commodi quo quis quia
            quisquam. Eius cupiditate ullam cum, placeat in maxime eveniet
            repellendus repudiandae dolores possimus nemo, explicabo distinctio
            reprehenderit repellat esse assumenda culpa.
          </p>
          <p className="mt-3 lg:text-md text-sm">
            Eos neque consectetur ipsam voluptas itaque reprehenderit facere
            quis dolor iure vero, porro suscipit, dignissimos minima ea eaque
            hic aliquid ipsum fugit deleniti totam necessitatibus culpa possimus
            repellat? Perferendis cupiditate nisi impedit consequatur,
            architecto dolorum qui? Earum, explicabo nulla possimus quisquam
            voluptas fugiat sapiente, cum maxime nesciunt eligendi nisi, rerum
            qui quos? Quasi quibusdam reiciendis aliquid eaque nulla ex.
          </p>
        </div>

        <div className="lg:col-span-2 lg:sticky lg:top-5 lg:h-[70dvh]">
          <div className="lg:rounded-xl lg:shadow lg:border w-full lg:p-8 lg:mt-0 mt-5">
            <div className="lg:block hidden">
              <p className="text-xl">
                $94,708 USD{" "}
                <span className="text-sm text-gray-500">
                  raised of $100,000 goal
                </span>
              </p>

              <div className="relative mt-3">
                <div className="absolute w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: `69%` }}
                  ></div>
                </div>
              </div>

              <p className="mt-9 text-sm text-gray-600">1.3K donations</p>
            </div>

            <p className="lg:hidden block font-bold">Donation</p>

            <div className="grid grid-cols-12 lg:gap-x-10 gap-y-4 lg:mt-8 mt-4">
              <div className="bi-person-hearts text-2xl text-red-600"></div>
              <div className="col-span-11">
                <p>160 people just donated</p>
              </div>

              <div className="bi-hearts text-2xl text-red-600"></div>
              <div className="col-span-11">
                <p>Anonymous</p>
                <p>
                  50$. <Link to="/">Recent Donation</Link>
                </p>
              </div>

              <div className="bi-hearts text-2xl text-red-600"></div>
              <div className="col-span-11">
                <p>Anonymous</p>
                <p>
                  50$. <Link to="/">Recent Donation</Link>
                </p>
              </div>

              <div className="bi-hearts text-2xl text-red-600"></div>
              <div className="col-span-11">
                <p>Anonymous</p>
                <p>
                  50$. <Link to="/">Recent Donation</Link>
                </p>
              </div>
            </div>

            <button className="w-full bg-violet-700 text-white h-12 rounded-lg shadow mt-5">
              Share
            </button>

            <button className="w-full bg-violet-700 text-white h-12 rounded-lg shadow mt-3">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default Detail;
