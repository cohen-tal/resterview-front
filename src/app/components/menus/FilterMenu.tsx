import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

interface FilterMenuProps {
  open: boolean;
  children?: React.ReactNode;
  onClickExit?: () => void;
}

export default function FilterMenu({
  open,
  children,
  onClickExit,
}: FilterMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <LazyMotion features={domAnimation}>
          <m.div
            className="absolute border right-0 bottom-0 bg-white rounded-t-xl z-50 w-full h-2/3 font-figtree"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="relative border-b p-2 text-center text-lg font-semibold">
              Filters
              <button
                onClick={onClickExit}
                className="absolute right-5 top-1/2 -translate-y-1/2"
              >
                <IoCloseSharp size={24} />
              </button>
            </div>
            {children}
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  );
}
