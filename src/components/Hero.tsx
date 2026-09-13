import React from 'react'
import profileImage from '../assets/fotoprofile.jpeg'

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img
                src={profileImage}
                alt="Hero"
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover border-4 
                transform transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-4xl font-bold mb-4'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500'>
                    Lukas Herdian
                </span>
                , Full Stack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in Building modern and responsive web applications.
            </p>
            <div className='mt-8 space-x-4'>
                <button onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }} className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Contact Me
                </button>
                <button onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }} className='bg-gradient-to-r from-purple-500 to-pink-500 text-white md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    View My Projects
                </button>
            </div>
        </div>
    )
}

export default Hero
