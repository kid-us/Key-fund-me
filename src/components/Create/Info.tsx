import { useEffect, useState } from "react";
import useIncompleteFieldsAlert from "../../hooks/useAlert";
import Alert from "../Alert/Alert";
import ContinueButton from "../Button/ContinueButton";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import BackButton from "../Button/BackButton";

import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useFundStore } from "../../store/useCreateFund";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(3, {
    message: "Fundraiser title required and must be greater than 3 chars.",
  }),

  description: z.string().min(50, {
    message:
      "Fundraiser description required and must be greater than 50 chars.",
  }),
  target: z
    .number({ invalid_type_error: "Initial target fund is required." })
    .min(100),
});

type FormData = z.infer<typeof schema>;

const Info = () => {
  const [title] = useState("Fundraiser Info");
  useDocumentTitle(title);

  const navigate = useNavigate();
  const { fundraise, addToFund } = useFundStore();

  const alert = useIncompleteFieldsAlert("info");

  const [loader, setLoader] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   Get previous data
  useEffect(() => {
    setValue("title", fundraise?.campaign_title || "");
    setValue("description", fundraise?.campaign_description || "");
    setValue("target", fundraise?.target_amount || 100);
  }, [setValue, fundraise]);

  //   On submit
  const onSubmit = (data: FieldValues) => {
    setLoader(true);

    // Store to storage
    addToFund({
      campaign_title: data.title,
      campaign_description: data.description,
      target_amount: data.target,
    });

    setTimeout(() => {
      navigate("/create/category");
    }, 500);
  };

  return (
    <>
      {/* Alert */}
      {alert && <Alert link="/category" start={3} />}

      {/* Sidebar */}
      <Sidebar
        image="info"
        title="Tell us about the Fundraiser"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
    quis sequi provident, magnam illo ratione porro, nulla eius suscipit
    qui facilis. Nulla iure veritatis cupiditate atque quis modi
    necessitatibus a!"
      />

      {/* Fundraiser */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-6">Fundraising information</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm text-gray-600">
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                name="title"
                className="border border-gray-600 ps-4 w-full h-14 rounded-lg mt-1 focus:outline-none"
              />
              {errors.title && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Initial Target */}
            <div className="mb-4">
              <label htmlFor="target" className="block text-sm text-gray-600">
                Initial Target
              </label>
              <input
                {...register("target", { valueAsNumber: true })}
                type="number"
                name="target"
                className="border border-gray-600 ps-4 w-full h-14 rounded-lg mt-1 focus:outline-none"
                min={100}
              />
              {errors.target && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.target.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                name="description"
                className="border border-gray-600 ps-4 w-full h-36 rounded-lg mt-1 focus:outline-none resize-none p-2"
              ></textarea>
              <p className="text-xs text-gray-500">
                Minimum 50 characters required
              </p>
              {errors.description && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-between mt-14 lg:gap-x-0 gap-x-3">
              <BackButton link="/category" />
              <ContinueButton loader={loader} />
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Info;
