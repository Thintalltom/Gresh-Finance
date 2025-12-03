import React, { useState, useEffect } from 'react'
import shoppingBag from '../../assets/shopping-bag-1.svg'
import limit from '../../assets/limit.svg'
import ToggleButton from '../../assets/Toggle button.svg'
import coloredToggle from '../../assets/coloredtoggle.svg'
import { useNavigate } from 'react-router-dom'
import SpendingLimit from './SpendingLimit'
import SpecifyPlatform from './SpecifyPlatform'
import CardDisplay from './CardDisplay'
const info = [
  {
    id: 'spending-limit',
    icon: shoppingBag,
    title: 'Spending Limit',
    desc: 'Control your outflow.',
  },
  {
    id: 'specify-platform',
    icon: limit,
    title: 'Specify platform',
    desc: 'Set your billers.',
  }
]
const CustomizeCard = () => {
  const [toggles, setToggles] = useState<{ [key: string]: boolean }>({});
  const [spendingScreen, setSpendingScreen] = useState<boolean>(false);
  const [specifyPlatformScreen, setSpecifyPlatformScreen] = useState<boolean>(false);
  useEffect(() => {
    // Check spending limit and auto-toggle if value > 0
    const spendingLimit = localStorage.getItem('spendingLimit')
    if (spendingLimit && parseFloat(spendingLimit) > 0) {
      setToggles(prev => ({
        ...prev,
        'spending-limit': true
      }))
    }
  }, [])

  const handleToggle = (id: string) => {
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  h-[100vh]">
      <h3 className='font-semibold text-[20px]'>Customize your card</h3>
      <p className='text-[14px] text-[#636363]'> Add a personal touch to your card for just $2.99.</p>

      <CardDisplay />

      <div className='bg-white rounded-[16px] p-[16px] '>
        {info.map((item, index) => (
          <div key={index} className='flex items-center justify-between py-3'>
            <div className='flex items-center gap-3 flex-1 cursor-pointer' onClick={() => {
              if (item.id === 'spending-limit') {
                setSpendingScreen(true);
              } else if (item.id === 'specify-platform') {
                setSpecifyPlatformScreen(true);
              }
            }}>
              <img src={item.icon} alt={item.title} className='w-6 h-6' />
              <div>
                <h4 className='font-medium text-[16px]'>{item.title}</h4>
                <p className='text-[14px] text-[#636363]'>{item.desc}</p>
              </div>
            </div>

            <img src={toggles[item.id] ? coloredToggle : ToggleButton} alt='Toggle' className='w-[40px] h-[40px] cursor-pointer' onClick={() => handleToggle(item.id)} />
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/createCard/setupPin')} className="mt-auto mb-1 min-w-[348px] max-w-[358px] mx-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold">Setup PIN</button>
      {spendingScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-lg w-full max-w-md">
            <SpendingLimit onClose={() => setSpendingScreen(false)} />
          </div>
        </div>
      )}
         {specifyPlatformScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-lg w-full max-w-md">
            <SpecifyPlatform onClose={() => setSpecifyPlatformScreen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomizeCard