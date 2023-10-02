import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow m-4 dark:bg-gray-900 mx-auto ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to={"/"} className="hover:underline">
            MovieFlix™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
