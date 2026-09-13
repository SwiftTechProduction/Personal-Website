//import React from 'react'
import apar from '../assets/apar.jpg'
import { useState } from 'react'


const projects = [
    {
        id: 1,
        title: 'Meeting Room Reservation & Approval System',
        role: 'IT Programmer Supervisor',
        technology: 'VB.Net, MySQL',
        type: 'Windows Desktop Application',
        brief: 'A desktop-based meeting room reservation system developed to centralize room booking across multiple departments. The application manages room availability, prevents duplicate bookings for the same room, date, and time, supports user authentication and department level approval, and displays current meeting schedules on the reception monitor.',
        situation: 'The company required a centralized system to manage meeting room reservations across multiple departments. The existing booking process needed better control to prevent scheduling conflicts and provide clear visibil',
        task: 'As an IT Programmer, I was responsible for developing a desktop based meeting room reservation application that could be used across departments. The system needed to prevent duplicate bookings, support user authentication, provide an approval workflow, and display the latest meeting schedule for reception staff.',
        action: 'I developed the application using VB.NET. I implemented booking validation to ensure that the same meeting room could not be reserved for an overlapping date and time. I also implemented a login and department based approval workflow, where meeting room requests required approval from the relevant department supervisor',
        result: 'The application successfully centralized all 48 branches and HO for the meeting room reservation process and prevented conflicting reservations through automated booking validation. It was deployed for use across departments and has remained in operational use since 2018, demonstrating its long-term reliability and practical value to the organization.',
    },
    {
        id: 2,
        title: 'Fire Extinguisher Maintenance & Logistics Management System',
        role: 'IT Programmer Supervisor',
        technology: 'C#, Kendo UI,  MySQL',
        type: 'Web Application',
        image: apar,
        brief: 'A web-based system developed to manage the maintenance, lifecycle, and logistics of fire extinguishers across company facilities. The application manages expiration dates, refill schedules, equipment transfers, delivery documents, supplier receiving records, and other related maintenance processes.',
        situation: 'The company needed a centralized system to manage fire extinguisher maintenance and logistics across multiple buildings and operational locations. The existing process involved various activities such as monitoring expiration dates, scheduling refills, tracking equipment transfers, and managing supporting documents.',
        task: 'As an IT Programmer, I was responsible for developing a web application that could centralize fire extinguisher maintenance records and support the complete operational workflow. The system needed to manage expiration dates, refill dates, equipment transfers between branches and stores, delivery documentation, supplier receiving records, and other related maintenance activities. One of the main technical challenges was that the project required Kendo UI, which I had never used before.',
        action: 'I developed the web application using C# and Kendo UI. During development, I learned and implemented Kendo UI components required for the application user interface and data management functionality. I developed features for maintaining fire extinguisher records, monitoring expiration and refill schedules, tracking equipment movements, generating delivery notes, recording supplier receiving documents, and supporting other related operational processes.',
        result: 'The application successfully centralized all 48 branches and HO for the fire extinguisher maintenance and logistics information into a single web-based system. The system was deployed for operational use and has remained in active use since 2018, demonstrating its long term reliability and practical value to the company maintenance operations.',
    },
];

const Projects = () => {
    const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null)
    return (
        <div className='bg-black text-white py-16' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 gap-8'>
                    {projects.map((projects) => (
                        <div
                            key={projects.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                            transition-transform duration-300 hover:scale-105 flex flex-col'
                        >
                            <div
                                className='text-right text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-600 to-blue-400 mt-4'
                            >
                                {projects.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-yellow-400 to-purple-600 text-center'
                            >
                                {projects.title}
                            </h3>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-blue-500 text-center'
                            >
                                {projects.role}
                            </h3>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-blue-400 to-purple-500'
                            >
                                {projects.technology}
                            </h3>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-purple-400 to-green-500'
                            >
                                {projects.type}
                            </h3>
                            {projects.image && (
                                <img
                                    src={projects.image}
                                    alt={projects.title}
                                    className='w-98 mx-auto my-6 rounded-lg'
                                />
                            )}
                            <div className='mt-2 '>
                                Brief Project Description
                            </div>

                            <p className='mt-2 text-gray-300 text-justify'>{projects.brief}</p>
                            {expandedProjectId === projects.id && (
                                <div>
                                    <div className='mt-2 '>
                                        Situation
                                    </div>
                                    <p className='mt-2 text-gray-300 text-justify'>{projects.situation}</p>
                                    <div className='mt-2 '>
                                        Task
                                    </div>
                                    <p className='mt-2 text-gray-300 text-justify'>{projects.task}</p>
                                    <div className='mt-2 '>
                                        Action
                                    </div>
                                    <p className='mt-2 text-gray-300 text-justify'>{projects.action}</p>
                                    <div className='mt-2 '>
                                        Result
                                    </div>
                                    <p className='mt-2 text-gray-300 text-justify'>{projects.result}</p>
                                </div>
                            )}

                            <button className='inline-block text-green-400 hover:text-blue-500'
                                onClick={() =>
                                    setExpandedProjectId(
                                        expandedProjectId === projects.id ? null : projects.id
                                    )
                                }
                            >
                                {expandedProjectId === projects.id ? 'Show Less' : 'Read More'}
                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Projects