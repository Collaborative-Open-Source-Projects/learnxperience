"use client";
import Header from "./Header";
import TaskCard from "./TaskCard";

export default function Tasks({ tasks }) {
  return (
    <div className="shadow-xl p-5 sm:p-10 rounded-lg mt-5 w-fit  mx-auto  ">
      <Header totalTasks={10} finishedTasks={5} onAddTask={() => {}} />
      <ul className="flex flex-col my-5 gap-5">
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} onAdd={() => {}} onDelete={() => {}} />
        ))}
      </ul>
    </div>
  );
}
