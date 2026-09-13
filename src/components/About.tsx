//import React from 'react'
import profileImage from '../assets/fotoprofile.jpeg'
const About = () => {
    return (
        <div className='bg-black text-white py-16' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        src={profileImage}
                        alt="About"
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
                    />
                    <div className='flex-1'>
                        <p className='text-lg mb-8 text-justify'>
                            I am a passionate full-stack developer with experience in building modern web applications.
                            I have 6 years experience as an IT Support Manager at Indomaret Group and 11 years experience as
                            a Founder of Herdian Group (Computer Hardware, Smartphone and Electronics Distributor)
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor='htmlandcss' className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div 
                                        className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105
                                        w-10/12'>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='reactjs' className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div 
                                        className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105'
                                        style={{ width: '50%' }}>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='itsupport' className='w-2/12'>IT Support</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div 
                                        className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105'
                                        style={{ width: '100%' }}>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex items-center'>
                                <label htmlFor='punctuality' className='w-2/12'>Punctuality</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div 
                                        className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105'
                                        style={{ width: '100%' }}>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor='attentiontodetail' className='w-2/12'>Attention to Detail</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div 
                                        className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-300 hover:scale-105'
                                        style={{ width: '100%' }}>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    6+
                                </h3>
                                <p>
                                    Years Work Experience
                                </p>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    11+
                                </h3>
                                <p>
                                    Years Business Experience
                                </p>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500'>
                                    14000+
                                </h3>
                                <p>
                                    IT Support Tickets Resolved
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About