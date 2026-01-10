import type { ReactNode, MouseEventHandler } from "react";

export type ModalProps = {
  modalHeading?: string;
  modalMessage?: string;
  primaryButton: string;
  secondaryButton: string;
  primaryButtonAction?: MouseEventHandler<HTMLButtonElement>;
  onClose?: () => void;
  children?: ReactNode;
};
