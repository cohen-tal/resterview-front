import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  return (
    <div className="created-by mt-32 lg:mt-0 w-full h-68 flex flex-row items-center border-t justify-center">
      <div className="flex flex-col place-items-center font-roboto text-2xl gap-5">
        <p className="text-gray-500">Created by Tal Cohen</p>
        <div className="flex place-items-center text-gray-800">
          <a
            className="pl-2"
            href="https://github.com/cohen-tal"
            target="_blank"
          >
            <IoLogoGithub size="8rem" />
          </a>
          <a
            className="pl-2"
            href="https://www.linkedin.com/in/tal-cohen-89ba68210/"
            target="_blank"
          >
            <IoLogoLinkedin size="8rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
