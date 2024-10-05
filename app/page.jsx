import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 p-4">
        {Array.from({ length: 40 }, (_, index) => (
          <h1 key={index}>Scroll Test</h1>
        ))}
      </div>
    </div>
  );
}