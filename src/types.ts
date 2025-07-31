export type Complaint = {
  id: number;
  title: string;
  description: string;
  location: string; // ✅ Needed
  status: "New" | "Pending" | "Resolved"; // ✅ Match exactly with what you're using
  date: string; // ✅ Needed
  submittedBy: string;
  submittedAt: string;
};

