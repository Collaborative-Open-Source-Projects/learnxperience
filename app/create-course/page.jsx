'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Accordion from '../components/Accordion';
import SideBar from '../components/SideBar'

export default function CreateCoursePage() {
  const router = useRouter();

  // Step tracking
  const [step, setStep] = useState(1);

  // General course state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  // Chapters state
  const [chapters, setChapters] = useState([]);

  // Pricing state
  const [price, setPrice] = useState(0);

  // Image upload logic
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const { width, height } = image;
        const size = Math.min(width, height);
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(image, (width - size) / 2, (height - size) / 2, size, size, 0, 0, size, size);
        const dataURL = canvas.toDataURL();
        setImage(dataURL);
      };
      image.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleImageDelete = () => {
    setImage('');
  };

  // Handle adding chapters dynamically
  const handleAddChapter = () => {
    setChapters([
      ...chapters,
      { name: '', description: '', video: null }, // New empty chapter
    ]);
  };

  // Handle individual chapter updates
  const handleChapterChange = (index, field, value) => {
    const updatedChapters = [...chapters];
    updatedChapters[index] = {
      ...updatedChapters[index],
      [field]: value,
    };
    setChapters(updatedChapters);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      category,
      image,
      price,
      chapters,
    };

    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      router.push('/courses');
    } else {
      alert('Error creating course');
    }
  };

  // Step navigation functions
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Helper to get step indicator class
  const getStepClass = (currentStep) => {
    return step === currentStep
      ? 'bg-indigo-500 text-white'
      : 'bg-gray-300 text-gray-600';
  };

  return (
    <div className='min-h-screen p-5 flex relative h-full'>
      <div>
                <SideBar />
            </div>
    <div className="w-3/4 lg:w-2/4 mx-auto p-4">
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          {/* Step 1 */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${getStepClass(1)}`}>
            1
          </div>
          <span className="mx-2 w-8 border-b-2 border-gray-300"></span>
          {/* Step 2 */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${getStepClass(2)}`}>
            2
          </div>
          <span className="mx-2 w-8 border-b-2 border-gray-300"></span>
          {/* Step 3 */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${getStepClass(3)}`}>
            3
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: General Course Information */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: General Course Information</h2>
            <div className="flex">
              <div className="w-1/3 relative p-2  rounded-md">
                {image ? (
                  <>
                    <img src={image} className="w-48 h-48 border-2 border-dashed border-gray-300 object-cover rounded-md" alt="course image" />
                    <button
                      className="absolute top-0 ml-[11rem] p-2 text-white bg-red-500 rounded-full hover:bg-red-600"
                      onClick={handleImageDelete}
                    >
                      x
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center border-2 border-dashed border-gray-300  justify-center h-48 w-48 text-2xl text-gray-600">
                      <span>Upload Image</span>
                    </div>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="absolute top-0 left-0 w-48 h-48 opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>
              <div className="w-2/3 pl-4">
                <div className="mt-4">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    <option value="">Select a category</option>
                    <option value="web development">Web Development</option>
                    <option value="mobile development">Mobile Development</option>
                    <option value="data science">Data Science</option>
                    <option value="design">Design</option>
                    <option value="ai/ml">AI/ML</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                onClick={nextStep}
              >
                Next: Add Chapters
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Add Chapters */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Add Chapters</h2>
            <div className="mt-4">
              <button
                type="button"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                onClick={handleAddChapter}
              >
                + New Chapter
              </button>
            </div>
            {chapters.map((chapter, index) => (
              <Accordion key={index} title={`Chapter ${index + 1}`}>
                <div>
                  <label htmlFor={`chapterName-${index}`}>Chapter Name</label>
                  <input
                    type="text"
                    id={`chapterName-${index}`}
                    value={chapter.name}
                    onChange={(e) => handleChapterChange(index, 'name', e.target.value)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <label htmlFor={`chapterDescription-${index}`}>Chapter Description</label>
                  <textarea
                    id={`chapterDescription-${index}`}
                    value={chapter.description}
                    onChange={(e) => handleChapterChange(index, 'description', e.target.value)}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <label htmlFor={`chapterVideo-${index}`}>Chapter Video</label>
                  <input
                    type="file"
                    id={`chapterVideo-${index}`}
                    onChange={(e) => handleChapterChange(index, 'video', e.target.files[0])}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
              </Accordion>
            ))}
            <div className="mt-4 flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                onClick={nextStep}
              >
                Next: Pricing
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pricing */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Pricing</h2>
            <div className="mt-4">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                <strong>Pricing Policy:</strong> Pricing is essential for attracting students. Make sure to offer competitive pricing, 
                consider free tiers for introductory courses, and ensure that the price reflects the value of the content.
              </p>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
              >
                Create Course
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
    </div>
  );
}
