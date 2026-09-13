import React from 'react'

const skills = [
    {
        id: 1,
        title: 'Front End Skills',
        description: 'HTML, PHP, CSS, Javascript, Typescript, React, Code Igniter, Bootstraps, Kendo UI',
    },
    {
        id: 2,
        title: 'Back End Skills',
        description: 'Java, C#, C++, VB.Net, Python, Node.js',
    },
    {
        id: 3,
        title: 'DevOps & Tools',
        description: 'Git, GitHub, AWS, Jira, Trello, Agile',
    },
    {
        id: 4,
        title: 'IT Support',
        description: '99% SLA Ticketing Support System, Software Testing, IT Project Manager, Business Analyst, UAT',
    },
    {
        id: 5,
        title: 'Database',
        description: 'MySQL, SQL Server, Oracle e-Business Suites R12, PostgreSQL',
    },
    {
        id: 6,
        title: 'IT Hardware',
        description: 'Ultra High-End PC Assembly, DIY Water Cooling Custom, Repair & Troubleshooting',
    },
];

const Skills = () => {
    return (
        <div className='bg-black text-white py-16' id='skills'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Skills</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {skills.map((skills) => (
                        <div
                            key={skills.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                            transition-transform duration-300 hover:scale-105 flex flex-col'
                        >
                            <div
                                className='text-right text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-600 to-blue-400 mt-4'
                            >
                                {skills.id}
                            </div>

                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-blue-500'
                            >
                                {skills.title}
                            </h3>
                            <p className='mt-2 flex-1 text-gray-300'>{skills.description}</p>
                            <a href='#' 
                                className='inline-block text-green-400 hover:text-blue-500'>
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Skills