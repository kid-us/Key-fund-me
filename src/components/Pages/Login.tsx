import { bg } from "../../assets";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useState } from "react";

const schema = z.object({
  password: z.string().min(6, {
    message: "Password required.",
  }),
  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const [passwordType, setPasswordType] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex items-center justify-center h-full lg:px-0 px-2">
        <div className="lg:w-[29%] lg:h-[80dvh] bg-white rounded-2xl p-8">
          {/* <div className="flex justify-center">
            <img src={logo} alt="Logo" className="w-20" />
          </div> */}
          <p className="text-xl mt-10">Sign In</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            {/* Email */}
            <div className="">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                className="border border-gray-400 ps-4 w-full h-12 rounded-lg mt-2 focus:outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <label htmlFor="email" className="block text-sm mt-5">
              Password
            </label>
            <div className="grid grid-cols-12 h-12 border border-gray-400 rounded-lg mt-2">
              <div className="col-span-11">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className="ps-4 w-full mt-2 focus:outline-none"
                />
              </div>
              <p
                onClick={() => setPasswordType(!passwordType)}
                className={` ${
                  passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                } text-xl pe-3 pt-2 cursor-pointer`}
              ></p>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}

            <p className="text-sm text-end mt-2 underline">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </p>

            <button className="bg-neutral-800 w-full rounded-lg text-white py-3 shadow shadow-zinc-900 mt-5">
              Sign in
            </button>

            <p className="text-xs mt-5 text-gray-700">
              By clicking the Sign In button, you agree to the KeyFundMe{" "}
              <Link to={"/"} className="underline">
                Terms of Service
              </Link>{" "}
              and acknowledge the{" "}
              <Link to={"/"} className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="mt-5 text-sm font-poppins">
              Don't have an Account?{" "}
              <Link to="/sign-up" className="underline font-poppins">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
