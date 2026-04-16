import { Button } from '@base-ui/react'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-[91vh] flex items-center'>

            <div className='max-w-7xl mx-auto px-6 w-full'>

                <div className='grid md:grid-cols-2 gap-10 items-center'>

                    {/* LEFT */}
                    <div className='max-w-lg'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                            Latest Electronics at Best Prices
                        </h1>

                        <p className='text-lg mb-6 text-blue-100'>
                            Discover cutting-edge technology with unbeatable deals on smartphones, laptops and more.
                        </p>

                        <div className='flex gap-4'>
                            <Button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
                                Shop Now
                            </Button>

                            <Button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600">
                                View Deals
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='flex justify-center'>
                        <img
                            src="/headphone.png"
                            className='w-[300px] md:w-[380px] h-auto object-contain rounded-lg shadow-2xl'
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero