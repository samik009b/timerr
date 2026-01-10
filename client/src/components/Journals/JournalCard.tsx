import { useEffect, useRef, useState } from "react";
import Modal from "../ui/Modal";
import deleteJournal from "../../utils/deleteJournal";
import updateJournal from "../../utils/updateJournal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import type { JournalProps } from "../../types/journalProps";

function JournalCard({ _id, day, text, productivityRating }: JournalProps) {
  const deleteRef = useRef<HTMLDialogElement>(null);
  const editRef = useRef<HTMLDialogElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [editedText, setEditedText] = useState(text);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    setEditedText(text);
  }, [text]);

  useEffect(() => {
    if (!isEditOpen) return;

    requestAnimationFrame(() => {
      textAreaRef.current?.select();
    });
  }, [isEditOpen]);

  const openEditModal = () => {
    setIsEditOpen(true);
    editRef.current?.showModal();
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    editRef.current?.close();
  };

  const handleSave = async () => {
    const trimmed = editedText.trim();
    if (!trimmed) return;

    try {
      await updateJournal(_id, trimmed);
      closeEditModal();
    } catch (err) {
      console.error("Failed to update journal", err);
    }
  };

  const handleDelete = async () => {
    try {
      const success = await deleteJournal(_id);
      if (success) deleteRef.current?.close();
    } catch (err) {
      console.error("Failed to delete journal", err);
    }
  };

  return (
    <div className="card w-[18rem] md:w-xl lg:w-3xl my-1.5">
      <div className="card-body relative flex flex-col">
        <h2 className="card-title text-sm md:text-base">DAY {day}</h2>

        <p className="text-left text-xs md:text-base">{text}</p>

        <div className="text-xs md:text-base text-left text-zinc-400/50">
          productivity: {productivityRating} / 10
        </div>

        <div className="absolute right-2 md:right-5 space-x-2 md:space-x-4">
          <button onClick={openEditModal} className="text-base cursor-pointer">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>

          <button
            onClick={() => deleteRef.current?.showModal()}
            className="text-base cursor-pointer"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>

        <Modal
          ref={deleteRef}
          modalHeading="Are you sure?"
          modalMessage="Press confirm to delete"
          primaryButton="Confirm"
          secondaryButton="Cancel"
          primaryButtonAction={handleDelete}
        />

        <Modal
          ref={editRef}
          primaryButton="Save"
          secondaryButton="Cancel"
          primaryButtonAction={handleSave}
          onClose={closeEditModal}
        >
          <textarea
            ref={textAreaRef}
            className="textarea textarea-bordered w-full"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default JournalCard;
