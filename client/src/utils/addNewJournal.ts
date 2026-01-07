import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const addNewJournal = async () => {
  const newJournal = await axios.post(`${backendUrl}/journal`);
  console.log(newJournal.data);
};

export default addNewJournal;
