import { useRef, useState } from "react";
import Modal from "../ui/Modal";
import deleteJournal from "../../utils/deleteJournal";
import updateJournal from "../../utils/updateJournal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
    <div className="card w-[18rem] md:w-xl lg:w-3xl my-1.5">
      <div className="card-body relative flex flex-col">
        <h2 className="card-title text-md md:card-title">DAY {day}</h2>
        <p className="text-left">{text}</p>
        <div
          className="badge badge-neutral badge-outline
         text-left text-zinc-500"
        >
          productivity: {productivityrating} / 10
        </div>
        <div className="absolute right-2 md:right-5 space-x-2 md:space-x-4">
          <button
            onClick={() => {
              editRef.current?.showModal();
            }}
            className="text-base cursor-pointer text-center"
          >
            <FontAwesomeIcon icon={faPenToSquare} />{" "}
          </button>
          <button
            onClick={() => dialogRef.current?.showModal()}
            className="text-base cursor-pointer text-center"
          >
            <FontAwesomeIcon icon={faTrashCan} />
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
