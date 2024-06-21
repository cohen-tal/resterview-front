"use client";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function AccountDropdownMenu({
  onClickLogout,
}: {
  onClickLogout: () => Promise<void>;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center p-2 gap-2 bg-slate-100/65 hover:bg-slate-100 rounded-lg hover:cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Avatar
          src="/landing5.png"
          alt="avatar"
          sx={{ width: 28, height: 28 }}
        />
        <div className="text-light-gray font-roboto text-shadow text-sm">
          Account Name
        </div>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ rotate: 0 }}
            animate={
              open
                ? {
                    rotate: 180,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }
                : {
                    rotate: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }
            }
          >
            <ExpandMoreIcon className="text-slate-500" />
          </m.div>
        </LazyMotion>
      </div>
      {open && (
        <LazyMotion features={domAnimation}>
          <m.div
            className="absolute w-full top-full mt-2 rounded-lg z-[999] bg-white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [0.7, 0.8, 0.9, 1],
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            <ul className="list-none p-1 rounded-lg bg-slate-100/65 shadow-lg">
              <li className="flex items-center gap-2 hover:bg-slate-300 hover:cursor-pointer hover:rounded-md p-2 border-b">
                <Avatar sx={{ width: 26, height: 26 }} />
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li className="flex items-center gap-2 hover:bg-slate-300 hover:cursor-pointer hover:rounded-md p-2">
                <Logout className=" text-gray-400" fontSize="medium" />
                <button
                  onClick={() => {
                    onClickLogout();
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </m.div>
        </LazyMotion>
      )}
    </div>
  );
}
