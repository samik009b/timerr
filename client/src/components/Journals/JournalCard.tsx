import { useRef, useState } from "react";
import Modal from "../ui/Modal";
import deleteJournal from "../../utils/deleteJournal";
import updateJournal from "../../utils/updateJournal";

type Props = {
  id: string;
  day: number;
  text: string;
  productivityrating: number;
};

function JournalCard({ id, day, text, productivityrating }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editRef = useRef<HTMLDialogElement>(null);

  const [editedText, setEditedText] = useState(text);

  const handleSave = async () => {
    try {
      console.log("handleSave called");
      
      await updateJournal(id, editedText.trim());
    } catch (error) {
      console.error("cant update the text field");
    }
  };

  const handleDelete = async () => {
    const success = await deleteJournal(id);
    if (success) {
      dialogRef.current?.close();
      // parent state update still missing
    }
  };

  return (
    <div className="card bg-white w-3xl my-2">
      <div className="card-body relative">
        <h2 className="card-title">DAY {day}</h2>
        <p className="text-left">{text}</p>
        <p className=" text-gray-400 text-left">{productivityrating}/10</p>
        <div className="absolute right-5 space-x-2">
          <button
            onClick={() => {
              editRef.current?.showModal();
            }}
            className="btn btn-outline btn-success p-2 text-xs"
          >
            Edit
          </button>
          <button
            onClick={() => dialogRef.current?.showModal()}
            className="btn btn-outline btn-success p-2 text-xs"
          >
            Delete
          </button>

          <Modal
            ref={dialogRef}
            modalHeading="Are you sure?"
            modalMessage="Press confirm to delete"
            primaryButton="Confirm"
            secondaryButton="Cancel"
            primaryButtonAction={handleDelete}
          />
          <Modal
            ref={editRef}
            primaryButton="save"
            secondaryButton="Cancel"
            primaryButtonAction={handleSave}
          >
            <textarea
              className="textarea textarea-bordered w-full bg-white"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default JournalCard;
