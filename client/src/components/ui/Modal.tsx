import type { MouseEventHandler, ReactNode, ForwardedRef } from "react";
import { forwardRef } from "react";

type ModalProps = {
  modalHeading?: string;
  modalMessage?: string;
  primaryButton: string;
  secondaryButton: string;
  primaryButtonAction?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const Modal = (
  {
    modalHeading,
    modalMessage,
    primaryButton = "Confirm",
    secondaryButton = "Close",
    primaryButtonAction,
    children,
  }: ModalProps,
  ref: ForwardedRef<HTMLDialogElement>,
) => {
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box text-left">
        {modalHeading && <h3 className="font-bold text-lg">{modalHeading}</h3>}

        {children ? <div className="py-4">{children}</div> : <p className="py-4">{modalMessage}</p>}

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
};

export default forwardRef(Modal);
