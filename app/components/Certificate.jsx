'use client'

import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

export default function Certificate() {
    const [certificateData, setCertificateData] = useState({
        name: 'John Doe',
        course: 'React Basics',
        date: 'October 12, 2024',
    });

    const certificateRef = useRef();

    useEffect(() => {
        const mockData = {
            name: 'Jane Smith',
            course: 'Advanced Web Development',
            date: 'October 15, 2024',
        };
        setCertificateData(mockData);
    }, []);

    const downloadCertificate = () => {
        const certificate = certificateRef.current;
        html2canvas(certificate, { scale: 2 }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'Certificate_of_Completion.png';
            link.click();
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div
                ref={certificateRef}
                className="w-[800px] h-[600px] p-10 border-4 border-gray-300 bg-gray-50 text-center font-sans"
            >
                <h1 className="text-4xl font-bold mb-6">Certificate of Completion</h1>
                <p className="text-xl mb-4">This certifies that</p>
                <h2 className="text-2xl font-semibold mb-4">{certificateData.name}</h2>
                <p className="text-lg mb-6">has successfully completed the course</p>
                <p className="text-2xl font-semibold mb-2">{certificateData.course}</p>
                <p className="text-lg mb-4">on {certificateData.date}</p>
                <div className="mt-8 flex justify-between">
                    <div>
                        <p className="text-base">_____________________</p>
                        <p className="text-sm">Instructor Name</p>
                    </div>
                    <div>
                        <p className="text-base">_____________________</p>
                        <p className="text-sm">Signature</p>
                    </div>
                </div>
            </div>

            <button
                onClick={downloadCertificate}
                className="mt-8 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
                Download Certificate
            </button>
        </div>
    );
}