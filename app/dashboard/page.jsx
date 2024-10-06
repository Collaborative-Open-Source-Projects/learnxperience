'use client';
import React from 'react';
import SideBar from '../components/SideBar';

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;