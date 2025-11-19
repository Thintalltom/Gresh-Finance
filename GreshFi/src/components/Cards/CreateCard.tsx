import VISA from '../../assets/visa.png'
import STAR from '../../assets/sparkles-three.png'
const CreateCard = () => {
    return (
        <div className="mt-[30px] min-h-screen flex flex-col">
            <div className=' flex justify-center items-center h-fit'>

            <div className='min-w-[420px] rounded-[16px] p-[16px] min-h-[320px] bg-gradient-to-l flex flex-col justify-between from-[#9C56FF] to-[#0E0D2F] rotate-90 mt-[40px]'>
                <p className="font-extrabold text-[32px] text-white">Gresh</p>

                <div className='flex justify-between'>
                    <p className="text-white font-semibold text-[14px]">CARDHOLDER NAME</p>

                    <img src={VISA} alt='Visa Card' className='w-[74px] h-[24px]' />
                </div>
            </div>
            </div>

            <div className='flex flex-col gap-[10px] mt-[80px]'>
                <div className='mx-auto'>
                    <p className='font-medium text-[14px]'>Standard</p>
                </div>

                <div className='flex justify-center items-center'>
                    <p className='max-w-[330px] text-[14px] text-center'>Pay your bills and shop your favourite items
                        globally, cop a card to enjoy the easy life.</p>
                </div>
                <button className='mx-auto bg-white border border-[#111111] rounded-[16px] px-[16px] py-[8px] text-[#111111] font-semibold text-[14px]'>Customize

                    <span><img src={STAR} alt="Sparkles" className="w-[16px] h-[16px] inline-block ml-[8px]" /></span>
                </button>
            </div>
            <button className="mt-auto mb-4 min-w-[348px] max-w-[358px] mx-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold">Get this card for free</button>
        </div>
    )
}

export default CreateCard