import React from "react";
import pageNotFound from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { useUpdateTitle } from "../hooks";

export const PageNotFound = ({ title }) => {
  useUpdateTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-white font-bold my-10 ">
            {" "}
            404 - Page Not Found
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pageNotFound} alt="PageNotFound" />
          </div>
        </div>
        <div className="flex justify-center p-4">
          <Link to={"/"}>
            <button
              type="button"
              class="p-2 text-xl w-64 text-white font-medium rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
              Head Back Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
