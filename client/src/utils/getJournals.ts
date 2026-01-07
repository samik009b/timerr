import axios from "axios";

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
  const response = await axios.get<JournalResponse>(`http://localhost:3000/journal/${page}`);
  return response.data;
};

export default getJournals;
