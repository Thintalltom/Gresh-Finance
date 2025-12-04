import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SupportImge from '../../assets/support.png'
import CardDisplay from '../Cards/CardDisplay'
import details from '../../assets/details.png'
import freeze from '../../assets/freeze.png'
import settings from '../../assets/settings.png'
import ApplePay from '../../assets/Applepay.png'
import Adobe from '../../assets/Adobe.png'
import Twitter from '../../assets/twitter.png'
const FreezeActions = () => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    }
    const icons = [freeze, details, settings]
    const handleCardAction = (index: number) => {
        if (index === 0) {
            navigate('/freezeActions')
        } else if (index === 1) {
            navigate('/cardDetails')
        } else if (index === 2) {
            navigate('/manageCard')
        }
    }
    const paymentData = [
        {
            title: 'Apple',
            date: '20 January, 13:34',
            price: '- $1,200',
            imaage: ApplePay
        },
        {
            title: 'Adobe Premium',
            date: '20 January, 13:34',
            price: '- $1,200',
            imaage: Adobe
        }, {
            title: 'Twitter Premium',
            date: '20 January, 13:34',
            price: '- $1,200',
            imaage: Twitter
        }
    ]
    return (
        <div className='bg-[#33FFC2] h-fit'>
            <div className='flex justify-between p-[10px]'>
                <button onClick={navigateBack}><ArrowLeftIcon /></button>
                <div className='flex flex-col gap-[10px] justify-center items-center'>
                    <img src={SupportImge} alt="Support" className='w-[16px] h-[16px]' />
                    <p className='text-center'>support</p>
                </div>
            </div>
            <CardDisplay />

            <div className='bg-white rounded-t-[20px] h-fit mt-[30px] flex flex-col'>
                <div className='grid grid-cols-3 mt-[38px]'>
                    {icons.map((icon, index) => (
                        <button key={index} onClick={() => handleCardAction(index)} className='flex flex-col justify-center items-center gap-2'>
                            <div className='w-[64px] h-[64px] bg-[#1C3D36] rounded-full  flex justify-center items-center'>
                                <img src={icon} alt={`icon-${index}`} className="filter brightness-0 invert" />
                            </div>
                            <p className='font-medium text-[14px] text-black'>  {index === 0 ? 'Freeze Card' : index === 1 ? 'Card Details' : 'Manage Card'}</p>
                        </button>
                    ))}
                </div>
                    <div className='p-[20px]'>

                <div className='rounded-[16px] p-[16px] bg-[#F8F8F8] max-h-[225px]'>
                    <div>
                        {paymentData.map((payment, index) => (
                            <div key={index} className='flex gap-[20px]'>
                                <img className='h-[24px] w-[24px] flex-none ' src={payment.imaage} alt={payment.title} />
                                <div className='flex flex-col gap-[10px] flex-initial w-64 '>
                                    <h4 className='font-medium text-[14px]'>{payment.title}</h4>
                                    <p className='text-[#636363] text-[12px] '>{payment.date}</p>
                                </div>
                                <h4 className='text-[14px] text-[#000000] flex-initial w-50 '>{payment.price}</h4>
                            </div>
                        ))}
                        <button className="mt-7 text-[#0D2F28] font-medium flex mx-auto ">See all</button>
                    </div>
                </div>
                    </div>
            </div>


        </div>
    )
}

export default FreezeActions