'use client';
import Hero from './components/Hero';
import { Gamepad2, GraduationCap, Users, Book, Code, ChartBar } from "lucide-react"
import { useState } from 'react';

const Page = () => {
  const courses = [
    {
      title: "Introduction to Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript.",
      icon: <Code className="w-10 h-10 mb-4 text-blue-500" />,
      duration: "8 weeks",
      level: "Beginner"
    },
    {
      title: "Data Science Fundamentals",
      description: "Explore data analysis, visualization, and machine learning.",
      icon: <ChartBar className="w-10 h-10 mb-4 text-green-500" />,
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      title: "UX/UI Design Principles",
      description: "Master the art of creating user-friendly interfaces.",
      icon: <Book className="w-10 h-10 mb-4 text-purple-500" />,
      duration: "6 weeks",
      level: "All levels"
    },
  ]

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMessage('Successfully signed up!');
        setEmail('');
      } else if (response.status === 409) {
        setMessage( 'Email already exists!');
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Error signing up, please try again later.');
    }
  };

  return (
    <main className='relative flex flex-col min-h-screen justify-center'>
      {/* <SideBar /> */}
      <Hero />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why LearnXperience?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[
              { icon: Gamepad2, title: "Gamified Learning", description: "Turn studying into an adventure with points, badges, and leaderboards." },
              { icon: Users, title: "Social Interaction", description: "Collaborate with peers, join study groups, and compete in challenges." },
              { icon: GraduationCap, title: "Personalized Paths", description: "Adaptive learning tailored to your pace and style." },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center mx-auto">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                {course.icon}
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex justify-between w-full text-sm text-muted-foreground">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg- text-white bg-[#1a1a2e] flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Learning?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                Join LearnXperience today and start your journey towards mastery through play.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor="newsletter" className="mb-2 font-medium">Stay updated with new courses</label>
                <input
                  type="email"
                  id="newsletter"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-purple-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-500 text-white rounded-lg p-2 hover:bg-purple-600 transition-all duration-200 ease-in"
                >
                  Subscribe
                </button>
              </form>
              {message && <p>{message}</p>}
              <p className="text-xs text-white/60">
                By signing up, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;