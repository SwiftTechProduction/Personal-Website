import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white p-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-centre md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>Lukas Herdian</div>
                <div className='space-x-1 md:space-x-6 text-l md:text-base'>
                    <a href="#home" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About Me</a>
                    <a href="#services" className='hover:text-gray-400'>Services</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
                    transform transition-transform duration-300 hover:scale-105 px-2 py-1 md:px-4 md:py-2 
                    ml-5 whitespace-nowrap rounded-full'>
                    Connect Me
                </button>
            </div>
        </nav>
    )
}

export default Navbar