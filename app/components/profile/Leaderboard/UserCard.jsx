import Image from "next/image";
import placeholderImage from "../placeholders/avatar.png";
export default function UserCard({
  rank,
  username,
  avatar,
  points,
  level,
  xp,
  isCurrentUser,
  scroll,
}) {
  return (
    <div
      className={`flex justify-between items-center gap-4 ${
        isCurrentUser ? "bg-[#1E1E22]" : "bg-[#303043]"
      } p-3 rounded-lg ${scroll}`}
      style={{
        transform: `translateY(-${scroll})`,
        transition: "transform 0.5s ease",
      }}
    >
      <div className="flex gap-2 items-center">
        <p
          className={`font-bold ${
            rank == 1
              ? "text-purple-600"
              : rank == 2
              ? "text-yellow-600"
              : "text-gray-600"
          }`}
        >
          {rank}.
        </p>
        <Image
          src={avatar}
          alt="Placeholder"
          width={35}
          height={35}
          className="rounded-full"
        />
        <p>{username}</p>
      </div>
      <p className="text-sm hidden sm:block">{level}</p>
      <p className="text-sm hidden sm:block">{xp}</p>
      <p className="text-sm ">{points}</p>
    </div>
  );
}
