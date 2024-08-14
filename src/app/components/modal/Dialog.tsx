import { createPortal } from "react-dom";

interface DialogProps {
  open: boolean;
  children?: React.ReactNode;
  onClose?: VoidFunction;
}

export default function Dialog({ onClose, open, children }: DialogProps) {
  return open
    ? createPortal(
        <div className="fixed flex items-center justify-center z-[9999] inset-0 w-screen h-screen bg-black">
          {children}
        </div>,
        document.body
      )
    : null;
}
