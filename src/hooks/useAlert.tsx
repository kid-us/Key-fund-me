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
    } else if (from === "media") {
      if (
        fundraise.campaign_title === undefined ||
        fundraise.campaign_title === "" ||
        fundraise.campaign_description === undefined ||
        fundraise.campaign_description === "" ||
        fundraise.target_amount === undefined
      ) {
        setAlert(true);
      }
    } else if (from === "verify") {
      if (
        fundraise.main_image === undefined ||
        fundraise.main_image === ""
        // fundraise.photo === undefined ||
        // fundraise.photo === ""
      ) {
        setAlert(true);
      }
    } else if (from === "finance") {
      if (
        fundraise.government_issue_id === undefined ||
        fundraise.government_issue_id === "" ||
        fundraise.photo === undefined ||
        fundraise.photo === ""
      ) {
        setAlert(true);
      }
    }
  }, [from]);

  return alert;
};

export default useIncompleteFieldsAlert;
