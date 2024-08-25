import React from 'react';
import ConsultantCard from './consultcard';

const consultants = [
    {
        name: 'Dr. Anjali Sharma',
        title: 'Gender Specialist',
        phone: '+91 9876543210',
        email: 'anjali.sharma@example.com',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Mr. Rajiv Mehta',
        title: 'Counselor',
        phone: '+91 9123456789',
        email: 'rajiv.mehta@example.com',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Ms. Priya Desai',
        title: 'Legal Advisor',
        phone: '+91 8765432109',
        email: 'priya.desai@example.com',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Dr. Anjali Sharma',
        title: 'Gender Specialist',
        phone: '+91 9876543210',
        email: 'anjali.sharma@example.com',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Mr. Rajiv Mehta',
        title: 'Counselor',
        phone: '+91 9123456789',
        email: 'rajiv.mehta@example.com',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Ms. Priya Desai',
        title: 'Legal Advisor',
        phone: '+91 8765432109',
        email: 'priya.desai@example.com',
        image: 'https://via.placeholder.com/150',
    },
    // Add more consultants as needed
];

const ConsultantPage = () => {
    return (
        <div className="min-h-screen bg-[#141414] py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Consultant Team</h1>
            <div className="flex flex-wrap justify-center overflow-y-auto max-h-screen">
                {consultants.map((consultant, index) => (
                    <ConsultantCard
                        key={index}
                        name={consultant.name}
                        title={consultant.title}
                        phone={consultant.phone}
                        email={consultant.email}
                        image={consultant.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConsultantPage;
