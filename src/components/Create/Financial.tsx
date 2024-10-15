import { useEffect, useState } from "react";
import Alert from "../Alert/Alert";
import BackButton from "../Button/BackButton";
import ContinueButton from "../Button/ContinueButton";
import Sidebar from "./Sidebar";
import Wrapper from "./Wrapper";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useIncompleteFieldsAlert from "../../hooks/useAlert";
import axios from "axios";
import baseUrl from "../../services/request";
import { useNavigate } from "react-router-dom";

interface Bank {
  name: string;
  id: string;
}

const schema = z.object({
  account_number: z.string().min(6, { message: "Account number is required." }),
});

type FormData = z.infer<typeof schema>;

const Financial = () => {
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyODcxMjM1NCwianRpIjoiOWE5YjQ2OGItN2VjYi00NTQ3LWFlYmUtZTdlMTZiOWMwNDVkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NDEsIm5iZiI6MTcyODcxMjM1NCwiZXhwIjoxNzYwMzM0NzU0fQ.Wux9cN5y28vqZLiMYakL3HAxu7sQELkSTgIMh9ASIMQ";

  const [title] = useState("Bank Information");
  useDocumentTitle(title);

  //  Check if the previous form is filled
  const alert = useIncompleteFieldsAlert("verify");
  const [loader, setLoader] = useState<boolean>(false);
  const [bank, setBank] = useState<Bank[]>([]);
  const [bankCode, setBankCode] = useState<string>("130");
  //   const [error, setError] = useState<string>("");

  // Banks
  useEffect(() => {
    axios
      .get(`${baseUrl}/payment/banks`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBank(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(bankCode, data);
    setLoader(true);
    navigate("/verify");
  };

  return (
    <>
      {/* Alert */}
      {alert && <Alert link="/verification" start={3} />}

      <Sidebar
        image="bank"
        title="Bank Informations"
        page={6}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quis sequi provident, magnam illo ratione porro, nulla eius suscipit qui facilis. Nulla iure veritatis cupiditate atque quis modi necessitatibus."
      />

      {/* Fundraiser */}
      <Wrapper>
        <div className="w-full">
          <p className="text-xl mb-6">You bank Information</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Account Number */}
            <div className="mb-5">
              <label
                htmlFor="account_number"
                className="text-gray-600 block text-sm"
              >
                Account Number
              </label>
              <input
                {...register("account_number")}
                type="text"
                name="account_number"
                className={`focus:outline-none ps-3 placeholder:text-gray-400 w-full h-12 rounded-lg shadow border border-gray-400 mt-1`}
                placeholder="Bank account Number / Phone Number"
              />
              {errors.account_number && (
                <p className="text-xs mb-5 text-red-700 rounded py-1">
                  {errors.account_number.message}
                </p>
              )}
            </div>

            {/* Bank */}
            <div>
              <label htmlFor="bank" className="text-gray-600 block text-sm">
                Bank
              </label>
              <select
                name="bank"
                className={`focus:outline-none ps-3 placeholder:text-gray-400 w-full h-12 rounded-lg shadow border border-gray-400 mt-1`}
                onChange={(e) => setBankCode(e.currentTarget.value)}
              >
                {bank.length > 0 &&
                  bank.map((banks) => (
                    <option key={banks.name} value={banks.id}>
                      {banks.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex justify-between mt-14 lg:gap-x-0 gap-x-3">
              <BackButton link="/verification" />
              <ContinueButton loader={loader} />
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Financial;
