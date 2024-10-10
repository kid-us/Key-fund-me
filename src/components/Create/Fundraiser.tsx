import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";

import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const schema = z.object({
  fName: z
    .string()
    .min(3, { message: "First name required and must be greater 3 chars." }),

  lName: z
    .string()
    .min(3, { message: "Last name required and must be greater 3 chars." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
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
});

type FormData = z.infer<typeof schema>;

const Fundraiser = () => {
  const [title] = useState("Register");
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
    <>
      {/* Sidebar */}
      <Sidebar
        image="hello"
        title="Let us know to you!"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          quis sequi provident, magnam illo ratione porro, nulla eius suscipit
          qui facilis. Nulla iure veritatis cupiditate atque quis modi
          necessitatibus a!"
      />

      {/* Fundraiser */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-10">Create account</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* First Name */}
            <div className="mb-4">
              <label htmlFor="fName" className="block text-sm text-gray-600">
                First Name
              </label>
              <input
                {...register("fName")}
                type="text"
                name="fName"
                className="border border-gray-600 ps-4 w-full h-14 rounded-lg mt-1 focus:outline-none"
              />
              {errors.fName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.fName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label htmlFor="lName" className="block text-sm text-gray-600">
                Last Name
              </label>
              <input
                {...register("lName")}
                type="text"
                name="lName"
                className="border border-gray-600 ps-4 w-full h-14 rounded-lg mt-1 focus:outline-none"
              />
              {errors.lName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.lName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm text-gray-600">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="text"
                name="phone"
                className="border border-gray-600 ps-4 w-full h-14 rounded-lg mt-1 focus:outline-none"
                placeholder="09 / 07"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <label htmlFor="email" className="block text-sm mt-4 text-gray-600">
              Password
            </label>
            <div className="grid grid-cols-12 border border-gray-600 rounded-lg mt-1 overflow-hidden">
              <div className="col-span-11">
                <input
                  {...register("password")}
                  type={!passwordType ? "text" : "password"}
                  name="password"
                  className="ps-4 w-full focus:outline-none h-14"
                />
              </div>
              <p
                onClick={() => setPasswordType(!passwordType)}
                className={` ${
                  passwordType ? "bi-eye-fill" : "bi-eye-slash-fill"
                } text-xl pe-3 pt-4 cursor-pointer text-center`}
              ></p>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="flex justify-end mt-14">
              <button className="btn-bg w-60 rounded-lg text-white py-3 shadow shadow-zinc-900">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Fundraiser;
