import React from "react";

export default function Navigation({ setCurrentPage, currentPage }) {
  return (
    <nav>
      <ul className="flex justify-between font-bold text-lg text-center">
        <li
          className={`p-5 w-full hover:bg-purple-900 ${
            currentPage === 1 && "bg-purple-700"
          }`}
          onClick={() => setCurrentPage(1)}
        >
          7 Days
        </li>
        <li
          className={`p-5 w-full border-s-2 hover:bg-purple-900 ${
            currentPage === 2 && "bg-purple-700"
          } `}
          onClick={() => setCurrentPage(2)}
        >
          30 Days
        </li>
        <li
          className={`p-5 w-full border-s-2 hover:bg-purple-900 ${
            currentPage === 3 && "bg-purple-700"
          } `}
          onClick={() => setCurrentPage(3)}
        >
          All Time
        </li>
      </ul>
    </nav>
  );
}
