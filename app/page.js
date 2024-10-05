'use client';
import SideBar from './components/SideBar.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className='flex-1 p-4 min-h-screen text-xl font-normal mb-4 theme-light:text-gray-800 theme-dark:text-gray-200'>
        <h1>Scroll Test</h1>
      </div>
    </main>
  );
}