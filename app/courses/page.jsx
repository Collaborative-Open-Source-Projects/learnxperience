'use client';

import React from 'react'
import CourseListing from '../components/CoursesListing'
import CourseBlocks from '../components/CourseBlocks'

export default function Page() {
    return (
        <div className='min-h-screen p-5 flex relative h-full'>
            <CourseListing>
                <CourseBlocks />
            </CourseListing>
        </div>
    )
}