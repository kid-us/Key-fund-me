import { create } from "zustand";

// Define the interface for the fund data structure
interface CreateFund {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  password?: string;
  campaign_title?: string;
  campaign_description?: string;
  main_image?: string;
  other_image?: string;
  target_amount?: string;
  category?: string;
  government_issue_id?: string;
  photo?: string;
  bank_name?: string;
  account_number?: string;
}

// Define the interface for the state
interface CreateFundState {
  fundraise: CreateFund;
  addToFund: (item: Partial<CreateFund>) => void;
  updateFund: (updatedItem: Partial<CreateFund>) => void;
  clearFund: () => void;
}

// Zustand store implementation
export const useFundStore = create<CreateFundState>((set) => ({
  // Initial state from localStorage or a default object
  fundraise: JSON.parse(localStorage.getItem("create_fund") || "{}"),

  // Function to add/update fields in the fund object
  addToFund: (item: Partial<CreateFund>) => {
    set((state) => {
      const updatedFund = { ...state.fundraise, ...item };
      localStorage.setItem("create_fund", JSON.stringify(updatedFund));
      return { fundraise: updatedFund };
    });
  },

  // Function to update specific fields in the fund object
  updateFund: (updatedItem: Partial<CreateFund>) => {
    set((state) => {
      const updatedFund = { ...state.fundraise, ...updatedItem };
      localStorage.setItem("create_fund", JSON.stringify(updatedFund));
      return { fundraise: updatedFund };
    });
  },

  // Function to clear the fund object
  clearFund: () => {
    set(() => {
      localStorage.removeItem("create_fund");
      return { fundraise: {} };
    });
  },
}));
