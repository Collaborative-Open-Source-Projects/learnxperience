import Image from "next/image";

import ProgressBar from "../../ui/ProgressBar";
import playButton from "@/public/images/playButton.png";
export default function CourseCard({
  img,
  level,
  desc,
  finished,
  total,
  name,
}) {
  return (
    <div className=" bg-[#303043] md:ms-5 rounded-lg max-w-80  flex flex-col sm:flex-row sm:max-w-[900px] items-center justify-center flex-1">
      <Image
        src={img}
        alt="Placeholder"
        className="rounded-lg object-cover w-full sm:flex-initial sm:w-56"
      />
      <div className="p-4">
        <h3 className="text-white text-md md:text-lg font-bold">{name}</h3>
        <p className="text-gray-300 text-sm md:text-md font-semibold mb-2">
          {desc}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <ProgressBar
            widthClass="w-full sm:flex-1"
            current={finished}
            max={total}
            isLight
          />
          <p className="text-gray-200 font-semibold text-sm mt-1 ">
            {((finished / total) * 100).toFixed(1)}% Completed
          </p>
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-md  mt-1">
          Level : {level}
        </p>
      </div>
      <div className=" justify-end items-center flex-1 pe-10 hidden sm:flex">
        <Image src={playButton} alt="Placeholder" className="w-10 me-0 h-10" />
      </div>
    </div>
  );
}
