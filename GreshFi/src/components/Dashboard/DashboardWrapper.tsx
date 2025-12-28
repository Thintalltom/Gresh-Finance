import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeLineIcon from '../../assets/home-line.svg.tsx'
import CreditCardIcon from '../../assets/credit-card-2.svg.tsx'
import PaymentIcon from '../../assets/payment.svg.tsx'
import SupportIcon from '../../assets/support.svg.tsx'
import plus from '../../assets/greshPlus.png'
import FilterIcon from '../../assets/filterIcon.svg'
import search from '../../assets/magnifying-glass-2.png'
import { setTransactionFilter } from '../../redux/slice/CardSlice'
import { useDispatch } from 'react-redux'
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
      name: 'Cards',
      href: '/dashboard/cards',
      icon: CreditCardIcon,
      current: location.pathname === '/dashboard/cards',
    },
    {
      name: 'Transactions',
      href: '/dashboard/transactions',
      icon: PaymentIcon,
      current: location.pathname === '/dashboard/transactions',
    },
    {
      name: 'Support',
      href: '/dashboard/support',
      icon: SupportIcon,
      current: location.pathname === '/dashboard/support',
    }
  ]
  const getTransactionPath = location.pathname === '/dashboard/transactions'
  const getSupportPath = location.pathname === '/dashboard/support'
  const dispatch = useDispatch()
  return (
    <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2] flex flex-col'>
      <header className='fixed top-0 left-0 right-0 z-10 flex justify-between p-[20px] pt-[24px]'>
        {!getSupportPath && (
          <div onClick={() => navigate('/userProfile/profile')} className='rounded-full w-[40px] h-[40px] bg-[#33FFC2] p-[8px] flex justify-center items-center'>
            <p className='font-semibold text-[16px]'>TA</p>
          </div>
        )}
        {getTransactionPath && (
          <div className='bg-[#296357] flex justify-center items-center rounded-[24px] gap-[10px] px-[24px] w-full max-w-[254px]'>
            <img src={search} alt='search box' className='w-[16px] h-[16px]' />
            <input type='text' placeholder='search' className='bg-transparent outline-none' />
          </div>
        )}
        {getTransactionPath ? (
          <div onClick={() => dispatch(setTransactionFilter(true))} className=''>
            <img src={FilterIcon} alt='filter icon' />
          </div>
        ) : (
          !getSupportPath && (
            <div onClick={() => navigate('/createCard/new')} className='rounded-full w-[40px] h-[40px] bg-[#33FFC2] p-[8px] flex justify-center items-center'>
              <img src={plus} alt="GreshPlus" />
            </div>
          )
        )}
      </header>
      <main className='flex-1 overflow-y-auto pt-20 pb-20 px-[20px]'>{children}</main>
      <nav className='fixed bottom-0 left-0 right-0 z-10'> 
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
      </nav>
    </div>
  )
}

export default DashboardWrapper