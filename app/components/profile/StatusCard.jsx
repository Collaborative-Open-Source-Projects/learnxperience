import React from "react";
import ProgressBar from "../ui/ProgressBar";

export default function StatusCard({ label, currentValue, maxValue }) {
  return (
    <li>
      <div className="flex  items-center gap-4">
        <p className="font-bold text-md ">{label}</p>
        <p className="font-bold text-sm text-center">
          {currentValue}/{maxValue}
        </p>
      </div>
      <ProgressBar widthClass="w-2/3" current={currentValue} max={maxValue} />
    </li>
  );
}
