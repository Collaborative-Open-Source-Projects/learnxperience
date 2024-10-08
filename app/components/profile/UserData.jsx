import React from "react";
import NameAvatar from "./ui/NameAvatar";
import ProgressBar from "../ui/ProgressBar";
import Status from "./Status";
import BadgeContainer from "./BadgeContainer";

export default function UserData({ userData = user }) {
  return (
    <div className="bg-[#1A1A2E] text-white  w-11/12 mx-auto p-8 rounded-lg md:basis-1/2">
      <div className="flex justify-between items-center gap-4">
        <NameAvatar name={userData.name} img={userData.img} />
        <div className="hidden sm:block">
          <p className="font-bold text-lg text-center">🔥Streak</p>
          <p className="font-bold text-lg text-center">
            <span className="text-purple-600">{userData.streak}</span>/
            {userData.targetStreak}
          </p>
        </div>
      </div>
      <div className="flex flex-col  mt-5 ms-2 md:flex-row md:justify-between md:w-2/3 md:gap-5">
        <div className="flex justify-between flex-col md:w-full">
          <div className="flex items-center justify-between  ">
            <ProgressBar
              widthClass="w-[70%] sm:w-2/3 md:w-full "
              current={userData.xp}
              max={userData.maxXp}
            />
            <div className="sm:hidden">
              <p className="font-semibold text-md text-center">🔥Streak</p>
              <p className="font-semibold text-md text-center">
                <span className="text-purple-600">{userData.streak}</span>/
                {userData.targetStreak}
              </p>
            </div>
          </div>

          <p className="font-bold w-fit">
            {userData.xp}/{userData.maxXp} XP
          </p>
        </div>
        <p className="font-semibold md:w-1/5">Level : {userData.level}</p>
      </div>
      <Status status={userData.status} bounsStreak={userData.bounsStreak} />
      <BadgeContainer badges={userData.badges} />
    </div>
  );
}
