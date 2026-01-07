import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL

const deleteJournal = async (journalId: string): Promise<boolean> => {
  try {
    await axios.delete(`${backendUrl}/journal/${journalId}`);
    return true;
  } catch {
    return false;
  }
};

export default deleteJournal;
