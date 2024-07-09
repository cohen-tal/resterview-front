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
        <div className="absolute top-0 w-full h-full bg-black/60">
          <LazyMotion features={domAnimation}>
            <m.div
              style={{ translateX: "-50%", translateY: "-50%" }}
              className="absolute border top-1/2 left-1/2 bg-white rounded-xl z-[5000] w-[90%] max-w-[600px] h-fit min-h-[400px] font-figtree "
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: "100%", opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", duration: 0.6 }}
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
        </div>
      )}
    </AnimatePresence>
  );
}
