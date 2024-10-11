import { useEffect, useState } from "react";
import { useFundStore } from "../store/useCreateFund";

const useIncompleteFieldsAlert = (from: string) => {
  const { fundraise } = useFundStore();

  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (from === "category") {
      if (
        fundraise.first_name === undefined ||
        fundraise.last_name === undefined ||
        fundraise.phone_number === undefined ||
        fundraise.password === undefined
      ) {
        setAlert(true);
      }
    }
  }, [from]);

  return alert;
};

export default useIncompleteFieldsAlert;
