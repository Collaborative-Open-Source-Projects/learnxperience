import React from "react";
import Badge from "./Badge";
export default function BadgeContainer({ badges }) {
  return (
    <ul className="flex gap-3 flex-wrap mt-5 mx-auto w-11/12 justify-center sm:justify-start sm:w-full">
      {badges.map((badge, i) => (
        <Badge
          key={i}
          isAcquired={badge.isAcquired}
          img={badge.img}
          label={badge.label}
        />
      ))}
    </ul>
  );
}
