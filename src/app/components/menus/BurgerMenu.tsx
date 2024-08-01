"use client";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import BurgerMenuItem from "./menu-items/BurgerMenuItem";
import BurgerMenuSection from "./menu-sections/BurgerMenuSection";
import { signIn, useSession } from "next-auth/react";
import BurgerMenuProfileButton from "../buttons/BurgerMenuProfileButton";
import { GiForkKnifeSpoon } from "react-icons/gi";
import {
  MdOutlineAddBusiness,
  MdOutlineWatchLater,
  MdOutlineRateReview,
  MdOutlineReviews,
} from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import { IoTrophyOutline } from "react-icons/io5";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

export default function BurgerMenu() {
  const [isOpen, toggle] = useCycle(false, true);
  const { data: session } = useSession();

  return (
    <div className="sm:hidden">
      <div className="ml-auto pl-2 pr-4">
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
              className="fixed right-0 bottom-0 top-0 w-[85%] flex flex-col items-start bg-inherit gap-10 bg-white overflow-y-auto"
            >
              <div className="flex items-center justify-center p-2.5 w-full border-b bg-white">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={40}
                  style={{ objectFit: "cover" }}
                />
                <button
                  className="ml-auto"
                  onClick={() => {
                    toggle();
                  }}
                >
                  <CloseIcon />
                </button>
              </div>
              {session?.user ? (
                <BurgerMenuProfileButton
                  src={session.user.image!}
                  name={session.user.name!}
                />
              ) : (
                <IconContext.Provider
                  value={{
                    size: "2.5rem",
                  }}
                >
                  <div className="w-[85%] m-auto flex flex-col items-center justify-center gap-4">
                    <button
                      className="flex justify-center items-center p-1 gap-4 w-full border rounded-xl shadow-md"
                      onClick={() => {
                        signIn("google");
                      }}
                    >
                      <FcGoogle />
                      Sign in with Google
                    </button>
                    <button
                      className="flex justify-center items-center p-1 gap-4 w-full border rounded-xl shadow-md"
                      onClick={() => {
                        signIn("github");
                      }}
                    >
                      <ImGithub />
                      Sign in with GitHub
                    </button>
                  </div>
                </IconContext.Provider>
              )}
              <IconContext.Provider
                value={{
                  color: "gray",
                  size: "1.5rem",
                }}
              >
                <div className="self-center mt-4 border-b w-[90%]">
                  <BurgerMenuSection sectionTitle="Restaurants">
                    <BurgerMenuItem
                      text="Browse Restaurants"
                      href="/restaurants"
                      onClick={toggle}
                    >
                      <GiForkKnifeSpoon />
                    </BurgerMenuItem>
                    <BurgerMenuItem
                      text="Add New Restaurant"
                      href="/restaurants/new"
                      onClick={toggle}
                    >
                      <MdOutlineAddBusiness />
                    </BurgerMenuItem>
                    <BurgerMenuItem
                      text="Favorite Restaurants"
                      href="/restaurants/favorites"
                      onClick={toggle}
                    >
                      <BsBookmarkStar />
                    </BurgerMenuItem>
                  </BurgerMenuSection>
                </div>
                <div className="self-center border-b w-[90%]">
                  <BurgerMenuSection sectionTitle="Reviews">
                    <BurgerMenuItem text="Write a Review" href="/restaurants/">
                      <MdOutlineRateReview />
                    </BurgerMenuItem>
                    <BurgerMenuItem
                      text="My Reviews"
                      href="/restaurants/favorites"
                      onClick={toggle}
                    >
                      <MdOutlineReviews />
                    </BurgerMenuItem>
                  </BurgerMenuSection>
                </div>
                <div className="self-center border-b w-[90%]">
                  <BurgerMenuSection sectionTitle="Discover">
                    <BurgerMenuItem
                      text="Top Rated Restaurants"
                      href="/restaurants/favorites"
                      onClick={toggle}
                    >
                      <IoTrophyOutline />
                    </BurgerMenuItem>
                    <BurgerMenuItem
                      text="Map View"
                      href="/profile"
                      onClick={toggle}
                    >
                      <LiaMapMarkedAltSolid />
                    </BurgerMenuItem>
                  </BurgerMenuSection>
                </div>
              </IconContext.Provider>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
