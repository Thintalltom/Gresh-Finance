import React from 'react'
import Cancel from '../../assets/Vector.svg'
import search from '../../assets/magnifying-glass-2.png'
const SpecifyPlatform = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="flex flex-col  gap-6 p-6 h-[80vh]">
            <div className='absolute right-0 p-[10px] mb-[30px] cursor-pointer' onClick={onClose}>
                <img src={Cancel} alt="Cancel" className='w-[11.74px] h-[11.74px]' />
            </div>
            <div className='mt-[50px] flex flex-col gap-4'>
                <h3 className='font-bold text-[16px]'>Specify Platforms</h3>
                <p className='text-[#636363] text-[14px]'>Use your card on select platforms for more efficient
                    spending management.</p>

                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search platforms...'
                        className='w-full border border-gray-300 rounded-[24px] p-3 pl-10 focus:border-blue-500 focus:outline-none'
                    />
                    <img
                        src={search}
                        alt='Search'
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4'
                    />
                </div>
            </div>

             <button 
            //  onClick={() => navigate('/createCard/setupPin')} 
             className="mt-auto mb-1 min-w-[348px] max-w-[358px] mx-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold">Setup Platforms</button>
        </div>
    )
}

export default SpecifyPlatform