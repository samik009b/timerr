import type { MouseEventHandler, Ref } from "react";

type modalProps = {
  ref: Ref<HTMLDialogElement>;
  modalHeading: string;
  modalMessage: string;
  primaryButton: string;
  secondaryButton: string;
  primaryButtonAction?: MouseEventHandler<HTMLButtonElement>;
};

function Modal({
  ref,
  modalHeading,
  modalMessage,
  primaryButton = "confirm",
  secondaryButton = "close",
  primaryButtonAction,
}: modalProps) {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box bg-white text-left">
        <h3 className="font-bold text-lg">{modalHeading}</h3>
        <p className="py-4">{modalMessage}</p>
        <div className="modal-action">
          <form method="dialog" className="space-x-3">
            <button onClick={primaryButtonAction ?? undefined} className="btn">
              {primaryButton}
            </button>
            <button className="btn">{secondaryButton}</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
