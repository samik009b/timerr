// utils/updateJournal.ts
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const updateJournal = async (journalId: string, newText: string): Promise<boolean> => {
  try {
    await axios.patch(`${backendUrl}/journal/${journalId}`, { newText });
    console.log("function done", newText);
    return true;
  } catch {
    console.log("problem in function");
    return false;
  }
};

export default updateJournal;
