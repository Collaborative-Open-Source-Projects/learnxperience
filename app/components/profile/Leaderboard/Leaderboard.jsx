"use client";
import { useState } from "react";
import Naviagation from "./Navigation";
import Table from "./Table";
import placeholderImage from "../placeholders/avatar.png";
const users = [
  {
    rank: 1,
    username: "User 1",
    avatar: placeholderImage,
    points: 100,
    level: 1,
    xp: 10,
    isCurrentUser: true,
  },
  {
    rank: 2,
    username: "User 2",
    avatar: placeholderImage,
    points: 200,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
  {
    rank: 3,
    username: "User 3",
    avatar: placeholderImage,
    points: 300,
    level: 1,
    xp: 10,
    isCurrentUser: false,
  },
];
export default function Leaderboard() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-[#1A1A2E] text-white  w-11/12 mx-auto  pt-0 rounded-lg md:basis-1/2 overflow-hidden">
      <Naviagation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <h2 className="text-center font-bold text-xl text-purple-600 mt-5">
        Top Learners
      </h2>
      <Table users={users} />
    </div>
  );
}
