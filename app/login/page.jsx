'use client';
import { React, useState } from 'react'
import { useRouter } from 'next/navigation';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    
      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        router.push('/dashboard');
      } else {
        setMessage(data.error || 'Login failed!');
      }
    }
    catch (error) {
      alert('Error signing user');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-6xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-base font-medium text-gray-700">Password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-base" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Sign In</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default Login