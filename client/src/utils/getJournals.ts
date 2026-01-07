import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export type JournalType = {
  _id: string;
  day: number;
  text: string;
  productivityRating: number;
};

export type JournalResponse = {
  journals: JournalType[];
  totalPages: number;
};

const getJournals = async (page: number): Promise<JournalResponse> => {
  const response = await axios.get<JournalResponse>(`${backendUrl}/journal/${page}`);
  return response.data;
};

export default getJournals;
