import axios from "axios";
import type { JournalResponse } from "../types/journalResponse";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

class JournalApi {
  addNewJournal = async () => {
    const newJournal = await axios.post(`${backendUrl}/journal`);
    console.log(newJournal.data);
  };

  getJournals = async (page: number): Promise<JournalResponse> => {
    const response = await axios.get<JournalResponse>(`${backendUrl}/journal/${page}`);
    return response.data;
  };

  updateJournal = async (journalId: string, newText: string): Promise<boolean> => {
    try {
      await axios.patch(`${backendUrl}/journal/${journalId}`, { newText });
      console.log("function done", newText);
      return true;
    } catch {
      console.log("problem in function");
      return false;
    }
  };

  deleteJournal = async (journalId: string): Promise<boolean> => {
    try {
      await axios.delete(`${backendUrl}/journal/${journalId}`);
      return true;
    } catch {
      return false;
    }
  };
}

export default new JournalApi();
