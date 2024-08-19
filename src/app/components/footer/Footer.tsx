import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-300 w-full text-center py-8 mt-12 lg:mt-2">
      <div className="text-3xl font-semibold text-gray-700 mb-4">
        StarBite Reviews
      </div>
      <div className="flex flex-col items-center">
        <div className="text-lg font-roboto text-gray-800">
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col place-items-center mt-4">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/cohen-tal"
            target="_blank"
            className="bg-black/20 rounded-lg p-2 shadow-lg"
          >
            <IoLogoGithub size="2rem" className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/tal-cohen-89ba68210/"
            target="_blank"
            className="bg-black/20 rounded-lg p-2 shadow-lg"
          >
            <FaLinkedinIn size="2rem" className="text-white" />
          </a>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          © Created by Tal Cohen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
