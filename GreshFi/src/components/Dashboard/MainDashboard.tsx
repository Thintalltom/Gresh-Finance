import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import details from '../../assets/details.png'
import freeze from '../../assets/freeze.png'
import settings from '../../assets/settings.png'
import ApplePay from '../../assets/Applepay.png'
import Adobe from '../../assets/Adobe.png'
import Twitter from '../../assets/twitter.png'
const MainDashboard = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const navigate = useNavigate()

  const handleCardAction = (index: number) => {
    if (index === 0) {
      navigate('/freezeActions')
    } else if (index === 1) {
      navigate('/cardDetails')
    } else if (index === 2) {
      navigate('/manageCard')
    }
  }
  const icons = [freeze, details,  settings]
  const cardData = [
    {
      title: "GBP Card Balance",
      amount: "£ 120",
      decimal: ".84",
      buttonText: "View card"
    },
    {
      title: "USD Card Balance",
      amount: "$ 250",
      decimal: ".50",
      buttonText: "View card"
    },
    {
      title: "EUR Card Balance",
      amount: "€ 180",
      decimal: ".25",
      buttonText: "View card"
    },
    {
      title: "NGN Card Balance",
      amount: "₦ 45,000",
      decimal: ".00",
      buttonText: "View card"
    }
  ]

  const paymentData = [
    {
      title: 'Apple',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: ApplePay
    },
     {
      title: 'Adobe Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Adobe
    }, {
      title: 'Twitter Premium',
      date: '20 January, 13:34',
      price: '- $1,200.00',
      imaage: Twitter
    }
  ]

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentCard < cardData.length - 1) {
      setCurrentCard(currentCard + 1)
    } else if (direction === 'right' && currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }

  return (
    <section className="flex flex-col gap-[40px]">
      <div>
        <div 
          className="flex flex-col gap-[4px] justify-center items-center touch-pan-x"
          onTouchStart={(e) => {
            const startX = e.touches[0].clientX
            const handleTouchEnd = (endEvent: TouchEvent) => {
              const endX = endEvent.changedTouches[0].clientX
              const diff = startX - endX
              if (Math.abs(diff) > 50) {
                handleSwipe(diff > 0 ? 'left' : 'right')
              }
              document.removeEventListener('touchend', handleTouchEnd)
            }
            document.addEventListener('touchend', handleTouchEnd)
          }}
        >
          <h4 className="font-medium text-[14px] text-white">{cardData[currentCard].title}</h4>
          <p className="font-semibold text-[40px] text-white">
            {cardData[currentCard].amount} <span className="text-[30px]">{cardData[currentCard].decimal}</span>
          </p>
          <button className="font-medium text-[#0D2F28] mt-[24px] py-[8px] px-[12px] bg-[#EEF9F6] rounded-[30px]">
            {cardData[currentCard].buttonText}
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-[40px]">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-2 h-2 rounded-full  transition-colors ${
                index === currentCard ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
          <div className='grid grid-cols-3 '>
            {icons.map((icon, index) => (
              <button key={index} onClick={() => handleCardAction(index)} className='flex flex-col justify-center items-center gap-2'>
                <div className='w-[64px] h-[64px] bg-white rounded-full  flex justify-center items-center'>
                  <img src={icon} alt={`icon-${index}`} />
                </div>
                <p className='font-medium text-[14px] text-white'>  {index === 0 ?  'Freeze Card' : index === 1 ? 'Card Details' : 'Manage Card'}</p>
              </button>
            ))}
          </div>
          <div className='rounded-[16px] p-[16px] bg-white max-h-[225px]'>
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
    </section>
  )
}

export default MainDashboard