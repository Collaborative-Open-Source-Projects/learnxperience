import Image from "next/image";
import UserCard from "./UserCard";
import downarrow from "@/public/images/downarrow.png";
import { useState, useRef } from "react";
export default function Table({ users }) {
  const [scroll, setScroll] = useState(0);
  console.log(scroll, users.length);
  const tableRef = useRef(null);
  function handleScroll(direction) {
    if (direction === "down") {
      tableRef.current.scrollBy(0, 200);
    } else {
      tableRef.current.scrollBy(0, -200);
    }
  }
  return (
    <div className="pb-5">
      <header className="flex justify-between px-4 text-gray-300 text-lg mt-4 font-semibold">
        <div className="flex gap-4">
          <h3>Rank</h3>
          <h3>Username</h3>
        </div>
        <h3 className="hidden sm:block">Level</h3>
        <h3 className="hidden sm:block">XP</h3>
        <h3>Points</h3>
      </header>
      <main
        ref={tableRef}
        className="px-4 mt-4 flex flex-col gap-3 overflow-hidden h-72 scroll-smooth"
      >
        {users.map((user, index) => (
          <UserCard
            key={user.username + index}
            {...user}
            scroll={`${scroll}px`}
          />
        ))}
      </main>
      <div className="flex justify-center">
        {" "}
        <button
          className="w-fit mx-auto block mt-5"
          onClick={() => handleScroll("down")}
        >
          <Image src={downarrow} alt="downarrow" width={30} height={30} />
        </button>
        <button
          className="w-fit mx-auto block mt-5"
          onClick={() => handleScroll("up")}
        >
          <Image
            src={downarrow}
            alt="downarrow"
            width={30}
            height={30}
            className="rotate-180"
          />
        </button>
      </div>
    </div>
  );
}
