import { ReactNode, useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function BurgerMenu({ children }: { children?: ReactNode }) {
  const [isOpen, toggle] = useCycle(false, true);

  return (
    <>
      <div className="ml-auto">
        <button
          onClick={() => {
            toggle();
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end backdrop-blur-sm fixed inset-0 z-40 bg-slate-800 bg-opacity-30">
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, x: "100%", transition: { duration: 0.15 } }}
              className="fixed right-0 bottom-0 top-0 w-[65%] flex flex-col items-center justify-start bg-inherit gap-6"
            >
              <div className="flex flex-row items-center justify-center p-2.5 w-full border-b bg-cyan-700">
                <button
                  className="ml-auto"
                  onClick={() => {
                    toggle();
                  }}
                >
                  <CloseIcon />
                </button>
              </div>
              {children}
              {/* <DarkModeButton /> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
