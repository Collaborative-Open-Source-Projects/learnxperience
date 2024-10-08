import React from "react";
import right from "@/public/images/right.png";
import x from "@/public/images/X.png";
import Image from "next/image";

export default function TaskCard({
  name,
  date,
  desc,
  onDelete = () => {},
  onAdd = () => {},
}) {
  return (
    <div className="text-center sm:text-start bg-[#303043] p-5 rounded-3xl  md:flex md:flex-row items-center gap-5 max-w-96 mx-auto  md:max-w-[900px]">
      <div className="text-center text-white bg-purple-600 rounded-full min-w-20 max-w-20 h-20 mx-auto grid place-items-center md:mx-5 ">
        <p className="text-2xl font-bold">{date.day}</p>
        <p className="text-md font-semibold -mt-4">{date.month}</p>
      </div>
      <div>
        <h3 className="text-lg lg:text-2xl font-bold mt-2 text-white">
          {name}
        </h3>
        <p className="text-gray-300 text-sm lg:text-md mt-2">{desc}</p>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={onAdd}
          className="bg-green-500 grid place-content-center rounded-full w-12 h-12"
        >
          <Image src={right} alt="right" />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 grid place-content-center rounded-full w-12 h-12"
        >
          <Image src={x} alt="x" />
        </button>
      </div>
    </div>
  );
}
