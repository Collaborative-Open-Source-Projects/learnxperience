import React from "react";
import StatusCard from "./StatusCard";
export default function Status({ status, bounsStreak }) {
  return (
    <div>
      <h2 className="font-bold text-purple-600 text-xl">Status :</h2>
      <ul className="flex flex-col gap-3 mt-3">
        {status.map((status) => (
          <StatusCard
            key={status.label}
            currentValue={status.currentValue}
            maxValue={status.maxValue}
            label={status.label}
          />
        ))}
      </ul>
      <p className="font-bold mt-1 text-">
        Bonus <span className="text-red-600">Streak</span>{" "}
        <span className="font-semibold ms-2">x{bounsStreak}</span>
      </p>
    </div>
  );
}
