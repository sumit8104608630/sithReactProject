import { Percent, Star } from 'lucide-react';
import React from 'react'

function Offers({id,title,subtitle}) {


                return (
                <>
                    <div key={id} className=' w-full border-1 border-amber-500 flex items-center gap-4 rounded-xl px-2 py-2 bg-amber-50'>
                        <div>
                            <span>
                            <div className={`bg-gradient-to-br from-amber-300 to-amber-500 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <div className="relative ">
                                <Percent className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            </span>
                        </div>
                        <div>
                            <h1 className='font-semibold text-xl text-gray-700'>{title}</h1>
                            <p className='text-sm font-medium text-gray-600'>{subtitle}</p>
                        </div>
                    </div>
                </>
                )
            
}

export default Offers