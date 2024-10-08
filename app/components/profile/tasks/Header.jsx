import addButton from "@/public/images/addButton.png";
import Image from "next/image";
import ProgressBar from "../../ui/ProgressBar";
export default function Header({
  finishedTasks,
  totalTasks,
  onAddTask = () => {},
}) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2">
          <h2 className=" font-bold text-2xl text-purple-600 ">Tasks</h2>
          <p className="text-gray-800 font-semibold text-sm mt-1 ">
            {finishedTasks}/{totalTasks} Completed
          </p>
        </div>
        <ProgressBar current={finishedTasks} max={totalTasks} />
      </div>
      <button onClick={onAddTask}>
        <Image src={addButton} alt="addTask" className="mt-4" />
      </button>
    </div>
  );
}
