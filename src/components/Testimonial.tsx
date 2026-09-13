import React from 'react'
import indomaret from '../assets/Indomaret.png'
import kiyona from '../assets/kiyona.png'

const Testimonial = () => {
    return (
        <div className='bg-black text-white py-16' id='testimonial'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Clients</h2>
                <div className='grid grid-cols-1 md: grid-cols-3  gap-8'>
                    <div className='flex flex-col items-center'>
                        <img
                            src={indomaret}
                            alt="indomaret"
                            className=' w-72 h-32 object-contain rounded mb-8 md:mb-0'
                        />
                        <p className='text-justify'>
                            "Consistently delivered reliable IT support, system implementation, 
                            and issue resolution while maintaining strong SLA performance across enterprise operations"
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img
                            src={kiyona}
                            alt="kiyona"
                            className='w-72 h-32 object-contain rounded mb-8 md:mb-0'
                        />
                        <h2 className='text-justify'>
                            “Demonstrated strong ownership in product development, 
                            supplier coordination, branding, packaging, and launch preparation from concept to execution.”
                        </h2>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Testimonial