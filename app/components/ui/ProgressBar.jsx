import React from "react";
//change name to progress bar
export default function ProgressBar({
  widthClass = "w-full",
  current,
  max,
  isLight,
}) {
  let progress = (current / max) * 100;
  return (
    <div
      className={` ${widthClass} h-5 ${
        isLight ? "bg-[#C3C3C3]" : "bg-[#303043]"
      }`}
    >
      <div
        className={`h-5 bg-purple-600`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
