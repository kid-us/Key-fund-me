import { bg } from "../../assets";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logo } from "../../assets";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const schema = z.object({
  password: z
    .string()
    .min(12, { message: "Password must be at least 6 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/\d/, { message: "Password must contain at least one number." })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character.",
    }),

  fName: z.string().min(3, {
    message: "First name required.",
  }),

  lName: z.string().min(3, {
    message: "Last name required.",
  }),

  email: z.string().email({ message: "Email is required." }),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const [title] = useState("Sign In | KeyFundMe");
  useDocumentTitle(title);

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
        <div className="lg:w-[29%] lg:h-[95dvh] bg-white rounded-2xl p-8">
          <div className="flex justify-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-32" />
            </Link>
          </div>
          <p className="text-xl mt-5">Create an account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="fName" className="block text-sm text-gray-600">
                First Name
              </label>
              <input
                {...register("fName")}
                type="text"
                name="fName"
                className="border border-gray-400 ps-4 w-full h-12 rounded-lg mt-2 focus:outline-none"
              />
              {errors.fName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.fName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lName" className="block text-sm text-gray-600">
                Last Name
              </label>
              <input
                {...register("lName")}
                type="text"
                name="lName"
                className="border border-gray-400 ps-4 w-full h-12 rounded-lg mt-2 focus:outline-none"
              />
              {errors.lName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.lName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm text-gray-600">
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
            <label htmlFor="email" className="block text-sm text-gray-600">
              Password
            </label>
            <div className="grid grid-cols-12 border border-gray-400 rounded-lg mt-2">
              <div className="col-span-11">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className="ps-4 w-full focus:outline-none h-12"
                />
              </div>
              <p
                onClick={() => setPasswordType(!passwordType)}
                className={` ${
                  passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                } text-xl pe-3 pt-3 cursor-pointer`}
              ></p>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}

            <button className="bg-neutral-800 w-full rounded-lg text-white py-3 shadow shadow-zinc-900 mt-5">
              Sign Up
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
              Already have account?{" "}
              <Link to="/sign-in" className="underline font-poppins">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
