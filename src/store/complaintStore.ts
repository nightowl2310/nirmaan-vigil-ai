// store/complaintStore.ts
import { create } from "zustand";

export interface Complaint {
  name: string;
  email: string;
  complaint: string;
  status: "Pending" | "Resolved";
}

interface ComplaintStore {
  complaints: Complaint[];
  addComplaint: (complaint: Complaint) => void;
  updateComplaintStatus: (index: number, status: "Pending" | "Resolved") => void;
}

export const useComplaintStore = create<ComplaintStore>((set) => ({
  complaints: [],
  addComplaint: (complaint) =>
    set((state) => ({
      complaints: [...state.complaints, complaint],
    })),
  updateComplaintStatus: (index, status) =>
    set((state) => {
      const updated = [...state.complaints];
      updated[index].status = status;
      return { complaints: updated };
    }),
}));

export default useComplaintStore;
