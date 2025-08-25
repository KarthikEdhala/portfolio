import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a
          href="#top"
          className="cursor-pointer flex items-center justify-center gap-3 mb-2"
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-rose-500 text-white font-bold">
            KE
          </div>
          <h1 className="text-2xl font-bold font-Ovo text-gray-800 dark:text-white">
            Karthik Edhala
          </h1>
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          kedhala3@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 www.karthikedhala.com. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/KarthikEdhala">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/karthikedhala/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/KarthikEdhala">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
