import { ReactNode, useState } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export default function Modal({ isOpen, children, onClose }: ModalProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed left-0 right-0 top-16 bottom-0 p-2 lg:p-10 bg-black/60 z-[4999] flex items-end justify-center">
            <m.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: "100%", opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", duration: 1 }}
              className="relative overflow-hidden bg-white rounded-xl reviews-modal z-[5000] w-full max-w-[750px] min-h-[400px] max-h-full font-figtree shadow-lg"
            >
              <button
                onClick={onClose}
                className="absolute z-50 right-4 lg:right-7 top-0 translate-y-1/2"
              >
                <IoCloseSharp size={24} />
              </button>
              {children}
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
