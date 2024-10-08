import CourseCard from "./CourseCard";

export default function Courses({ courses }) {
  return (
    <div className="shadow-xl p-5 rounded-lg mt-5 w-fit mx-auto  ">
      <h2 className=" font-bold text-2xl text-purple-600 mt-5">Courses</h2>
      <ul className="flex flex-col my-5 gap-5 2xl:grid 2xl:grid-cols-2">
        {courses.map((course, i) => (
          <li className="flex justify-center" key={course.name + i}>
            <CourseCard key={course.name + i} {...course} />
          </li>
        ))}
      </ul>
    </div>
  );
}
