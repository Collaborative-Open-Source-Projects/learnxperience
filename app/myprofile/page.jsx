import React from "react";
import UserData from "../components/profile/UserData";
import Leaderboard from "../components/profile/Leaderboard/Leaderboard";
import Courses from "../components/profile/courses/Courses";
import badge from "../components/profile/placeholders/badge.png";
import img from "../components/profile/placeholders/course.png";

import Tasks from "../components/profile/tasks/Tasks";
const user = {
  userData: {
    name: "John Doe",
    streak: 15,
    targetStreak: 20,
    level: 9,
    xp: 10,
    maxXp: 100,
    bounsStreak: 2,
    status: [
      {
        label: "📋 Completed Tasks",
        currentValue: 10,
        maxValue: 100,
      },
      {
        label: "📒 Completed Lectures ",
        currentValue: 9,
        maxValue: 20,
      },
    ],
    badges: [
      {
        isAcquired: true,
        img: badge,
      },
      {
        isAcquired: true,
        img: badge,
      },
      {
        isAcquired: false,
        img: badge,
      },
      {
        isAcquired: false,
        img: badge,
      },
      {
        isAcquired: false,
        img: badge,
      },
      {
        isAcquired: false,
        img: badge,
      },
    ],
  },
  courses: [
    {
      name: "Introduction to Web Development",
      img,
      level: "Beginner",
      desc: "Learn the basics of HTML, CSS, and JavaScript.",
      finished: 20,
      total: 100,
    },
    {
      name: "Introduction to Web Development",
      img,
      level: "Beginner",
      desc: "Learn the basics of HTML, CSS, and JavaScript.",
      finished: 20,
      total: 100,
    },
    {
      name: "Introduction to Web Development",
      img,
      level: "Beginner",
      desc: "Learn the basics of HTML, CSS, and JavaScript.",
      finished: 20,
      total: 100,
    },
    {
      name: "Introduction to Web Development",
      img,
      level: "Beginner",
      desc: "Learn the basics of HTML, CSS, and JavaScript.",
      finished: 20,
      total: 100,
    },
  ],
  tasks: [
    {
      name: "Task Name",
      date: {
        day: 1,
        month: "OCT",
      },
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore`,
    },
    {
      name: "Task Name",
      date: {
        day: 1,
        month: "OCT",
      },
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore`,
    },
    {
      name: "Task Name",
      date: {
        day: 1,
        month: "OCT",
      },
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore`,
    },
  ],
};
export default function page() {
  return (
    <div className="p-5 container mx-auto ">
      <div className="flex-col gap-y-5 flex md:flex-row gap-x-10 lg:gap-x-20">
        <UserData userData={user.userData} />
        <Leaderboard />
      </div>
      <Courses courses={user.courses} />
      <Tasks tasks={user.tasks} />
    </div>
  );
}
