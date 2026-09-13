//import React from 'react'
import { useEffect, useState } from 'react'
import Backendless from 'backendless'

Backendless.initApp(
    '755A42C1-69A5-4631-82E3-F212C45756C8',
    '5EAFB934-9DC0-4D8E-BFA0-F7FB57213B66'
)

type Experience = {
    objectId: string
    role: string
    company: string
    year: string
    description: string
    sortOrder: number
}

const Experience = () => {
    const [experience, setExperience] = useState<Experience[]>([])

    useEffect(() => {
        Backendless.Data.of('Experience')
            .find()
            .then((data) => {
                const sortedExperience = (data as Experience[]).sort(
                    (a, b) => a.sortOrder - b.sortOrder
                )
                setExperience(sortedExperience)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
    return (
        <div className='bg-black text-white py-16' id='experience'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Experiences</h2>
                <div className='grid grid-cols-1 md: grid-cols-3  gap-8'>
                    {experience.map((experience) => (
                        <div
                            key={experience.objectId}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                            transition-transform duration-300 hover:scale-105 flex flex-col'
                        >
                            <div
                                className='text-right text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-600 to-blue-400 mt-4'
                            >
                                {experience.sortOrder}
                            </div>

                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-500 to-purple-500'
                            >
                                {experience.role}
                            </h3>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-yellow-500'
                            >
                                {experience.company}
                            </h3>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-purple-800'
                            >
                                {experience.year}
                            </h3>
                            <p className='mt-2 flex-1 text-gray-300'>{experience.description}</p>
                            {/*<a href='#'
                                className='inline-block text-green-400 hover:text-blue-500'>
                                Read More
                            </a>*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience