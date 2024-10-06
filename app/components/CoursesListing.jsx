import React from 'react'

export default function CourseListing({ children }) {
    return (
        <div className="flex-1 p-4 gap-5 flex flex-col h-fit justify-center items-center w-full">
            {children}
        </div>
    )
}