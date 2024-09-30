import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] ">
      {/* Container for the login box */}
      <div className="theme-dark:bg-gray-900 theme-dark:text-gray-200 theme-light:bg-slate-100 shadow-lg rounded-lg overflow-hidden flex w-2/3">
        
        {/* Left Side: Image */}
        <div className="w-1/2 relative">
          <Image 
            src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg" 
            alt="Login Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome Back</h2>

          <form className="w-full max-w-xs text-gray-900">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
