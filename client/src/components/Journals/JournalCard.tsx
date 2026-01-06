import { useRef } from "react";
import Modal from "../ui/Modal";

type Props = {
  day: number;
  text: string;
  productivityrating: number;
};

function JournalCard({ day, text, productivityrating }: Props) {
  function action() {
    alert("deleted successfully");
  }
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="card bg-white w-3xl my-2">
      <div className="card-body relative">
        <div className="absolute right-5 space-x-2 ">
          <button className="btn btn-outline btn-success p-2 text-xs">Edit</button>
          <button
            onClick={() => dialogRef.current?.showModal()}
            className="btn btn-outline btn-success p-2 text-xs"
          >
            Delete
          </button>
          <Modal
            ref={dialogRef}
            modalHeading="Are you sure ?"
            modalMessage="rpess confirm to delete"
            primaryButton="confirm"
            secondaryButton="cancel"
            primaryButtonAction={action}
          />
        </div>

        <h2 className="card-title">DAY {day}</h2>
        <p className="text-left">{text}</p>
        <div className="card-actions justify-end">
          <p className=" text-gray-400 text-left">{productivityrating}/10</p>
        </div>
      </div>
    </div>
  );
}

export default JournalCard;
