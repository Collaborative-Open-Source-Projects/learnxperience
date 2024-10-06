'use client';

import React, { useState } from 'react';
import { courseData } from '../public/data/CourseData';
import Image from 'next/image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function CourseBlocks() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [...new Set(courseData.map(course => course.category))];

    const filteredCourses = selectedCategory ? courseData.filter(course => course.category === selectedCategory) : courseData;

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center w-3/4 mb-5'>
                <h1 className='text-xl font-semibold mb-2 md:mb-0'>Search Category</h1>
                <Autocomplete
                    disablePortal
                    options={categories}
                    sx={{ width: 300 }}
                    onChange={(event, value) => setSelectedCategory(value)}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
            </div>

            <div className="flex flex-wrap gap-5 justify-center items-center w-full">
                {filteredCourses.map((course) => {
                    const { id, title, tutor, description, category, image } = course;
                    const shortDescription = description.length > 100 ? description.substring(0, 80) + '...' : description;

                    return (
                        <div
                            key={id}
                            className="bg-neutral-100 border border-gray-300 w-72 h-full rounded-md shadow-md flex flex-col overflow-hidden p-3 hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                src={image}
                                alt={`${title} - ${category}`}
                                className="w-full h-40 object-cover rounded-sm"
                                width={500}
                                height={300}
                            />

                            <div className="flex-grow p-3 flex flex-col justify-between gap-2">
                                <p className="text-xs border border-purple-500 rounded-full w-fit px-3 py-1">
                                    {category}
                                </p>
                                <h1 className="font-bold text-lg">{title}</h1>
                                <h3 className="text-xs font-semibold text-gray-800">{tutor}</h3>
                                <p className="text-sm text-gray-600">{shortDescription}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}