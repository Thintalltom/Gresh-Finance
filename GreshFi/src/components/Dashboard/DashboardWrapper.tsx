import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeLineIcon from '../../assets/home-line.svg.tsx'
import CreditCardIcon from '../../assets/credit-card-2.svg.tsx'
import PaymentIcon from '../../assets/payment.svg.tsx'
import SupportIcon from '../../assets/support.svg.tsx'
import plus from '../../assets/greshPlus.png'
const DashboardWrapper = ({children}: React.PropsWithChildren) => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const profileLinks = [
    {
      name: 'Home',
      href: '/dashboard/home',
      icon: HomeLineIcon,
      current: location.pathname === '/dashboard/home',
    },
    {
      name: 'Wallets',
      href: '/dashboard/wallets',
      icon: CreditCardIcon,
      current: location.pathname === '/dashboard/wallets',
    },
    {
      name: 'Transactions',
      href: '/dashboard/transactions',
      icon: PaymentIcon,
      current: location.pathname === '/dashboard/transactions',
    },
    {
      name: 'Profile',
      href: '/dashboard/profile',
      icon: SupportIcon,
      current: location.pathname === '/dashboard/profile',
    }
  ]

  return (
    <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2]'>
      <div className='flex justify-between p-[20px] w-screen pt-[24px]'>
        <div className='rounded-full w-[40px] h-[40px] bg-[#33FFC2] p-[8px] flex justify-center items-center'>
          <p className='font-semibold text-[16px]'>TA</p>
          </div> 
         <div onClick={() => navigate('/createCard/new')} className='rounded-full w-[40px] h-[40px] bg-[#33FFC2] p-[8px] flex justify-center items-center'>
         <img src={plus} alt="GreshPlus" />
          </div> 
      </div>
      <main className='p-[20px]'>{children}</main>
      <div className='absolute bottom-0'> 
      <div className='bg-[#124F40] w-screen grid grid-cols-4'>
        {profileLinks.map((link) => {
          return (
            <button
              key={link.name}
              onClick={() => navigate(link.href)}
              className='p-4 text-center flex flex-col items-center gap-1'
            >
              <div style={{ filter: link.current ? 'brightness(0) saturate(100%) invert(85%) sepia(85%) saturate(4678%) hue-rotate(120deg) brightness(103%) contrast(101%)' : 'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(352%) hue-rotate(155deg) brightness(95%) contrast(89%)' }}>
                <link.icon 
                  width={20} 
                  height={20}
                />
              </div>
              <span className={`text-xs ${
                link.current ? 'text-[#33FFC2]' : 'text-[#E1E6E7]'
              }`}>
                {link.name}
              </span>
            </button>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default DashboardWrapper