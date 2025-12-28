import VISA from '../../assets/VISA.png'
import STAR from '../../assets/sparkles-three.png'
import { useNavigate } from 'react-router-dom'
const CreateCard = () => {
    const navigate = useNavigate()
    return (
        <div className="mt-[30px] min-h-screen  flex flex-col">
            <div className='flex overflow-x-auto gap-4 py-8  min-h-[500px]'>
                <div className='flex-shrink-0 w-[50px]'></div>
                <div className='flex-shrink-0 flex justify-center items-center'>
                    <div className='min-w-[420px] rounded-[16px] p-[16px] min-h-[320px] bg-gradient-to-l flex flex-col justify-between from-[#9C56FF] to-[#0E0D2F] rotate-90'>
                        <p className="font-extrabold text-[32px] text-white">Gresh</p>
                        <div className='flex justify-between'>
                            <p className="text-white font-semibold text-[14px]">CARDHOLDER NAME</p>
                            <img src={VISA} alt='Visa Card' className='w-[74px] h-[24px]' />
                        </div>
                    </div>
                </div>
                <div className='flex-shrink-0 flex justify-center items-center'>
                    <div className='min-w-[420px] rounded-[16px] p-[16px] min-h-[320px] bg-gradient-to-l flex flex-col justify-between from-[#9C56FF] to-[#0E0D2F] rotate-90'>
                        <p className="font-extrabold text-[32px] text-white">Gresh</p>
                        <div className='flex justify-between'>
                            <p className="text-white font-semibold text-[14px]">CARDHOLDER NAME</p>
                            <img src={VISA} alt='Visa Card' className='w-[74px] h-[24px]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[10px] mt-[20px]'>
                <div className='mx-auto'>
                    <p className='font-medium text-[14px]'>Standard</p>
                </div>

                <div className='flex justify-center items-center'>
                    <p className='max-w-[330px] text-[14px] text-center'>Pay your bills and shop your favourite items
                        globally, cop a card to enjoy the easy life.</p>
                </div>
                <button onClick={() => navigate('/createCard/customize')} className='mx-auto bg-white border border-[#111111] rounded-[16px] px-[16px] py-[8px] text-[#111111] font-semibold text-[14px]'>Customize

                    <span><img src={STAR} alt="Sparkles" className="w-[16px] h-[16px] inline-block ml-[8px]" /></span>
                </button>
            </div>
            <button className="mt-auto mb-1 min-w-[348px] max-w-[358px] mx-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold">Get this card for free</button>
        </div>
    )
}

export default CreateCard