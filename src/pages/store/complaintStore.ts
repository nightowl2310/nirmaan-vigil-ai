import { create } from "zustand";

interface Complaint {
  name: string;
  email: string;
  complaint: string;
  status: "Pending" | "Resolved";
}

interface ComplaintStore {
  complaints: Complaint[];
  addComplaint: (complaint: Complaint) => void;
}

export const useComplaintStore = create<ComplaintStore>((set) => ({
  complaints: [],
  addComplaint: (complaint) =>
    set((state) => ({
      complaints: [...state.complaints, complaint],
    })),
}));
export default useComplaintStore;