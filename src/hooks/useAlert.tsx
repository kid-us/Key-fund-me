import { useEffect, useState } from "react";
import { useFundStore } from "../store/useCreateFund";

const useIncompleteFieldsAlert = (from: string) => {
  const { fundraise } = useFundStore();

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (from === "category") {
      if (
        fundraise.first_name === undefined ||
        fundraise.first_name === "" ||
        fundraise.last_name === undefined ||
        fundraise.last_name === "" ||
        fundraise.phone_number === undefined ||
        fundraise.phone_number === "" ||
        fundraise.password === undefined ||
        fundraise.password === ""
      ) {
        setAlert(true);
      }
    } else if (from === "info") {
      if (fundraise.category === undefined || fundraise.category === "")
        setAlert(true);
    }
  }, [from]);

  return alert;
};

export default useIncompleteFieldsAlert;
