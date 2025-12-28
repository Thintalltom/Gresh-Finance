// import React from 'react'
import searchIcon from '../../assets/magnifying-glass-2.png'
import finder from '../../assets/finder.svg'
import manageIcon from '../../assets/snow-flakes.svg'
import helpIcon from '../../assets/circle-questionmark.svg'
import credicardIcon from '../../assets/credit-card-add.svg'
import passwordIcon from '../../assets/password.svg'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  const supportCard = [
    {
      text:'Transaction Dispute',
       icon:  finder
    },
      {
      text:'Help with Card',
       icon:  helpIcon
    },
      {
      text:'view my card PIN',
       icon:  passwordIcon
    },
      {
      text:'Funding issues',
       icon:  credicardIcon
    },
      {
      text:'Manage frozen cards',
       icon:  manageIcon
    },
  ]
  const DisputeText = [
    {
      text:'Dispute Process and timeline',
     
    },
      {
      text:'Updating my documents',
  
    },
      {
      text:'Premium card benefits',
   
    }
  ]
  return (
    <div className="h-screen  overflow-scroll flex flex-col gap-[10px]">
      <div className="flex justify-center items-center text-white flex-col gap-2">
        <h4 className="text-[14px]">Good Morning, Arinola.</h4>
        <h3 className="font-bold text-[24px]">How can we help?</h3>
      </div>
      <div className="px-[14px] py-[10px] bg-[#296357] rounded-[8px] flex items-center gap-2">
        <img src={searchIcon} alt="Search" className="w-[16px] h-[16px]" /> 
        <input type="text" placeholder="Search for related issues" className=" w-full bg-[#296357] outline-none" />
      </div>
      <div className='bg-white w-full h-fit p-[16px] rounded-[16px]'>
      <button className='min-w-[310px] px-[16px] py-[12px] rounded-[24px] h-[47px] w-full text-white text-[16px] bg-[#0D2F28]'>Notify me</button>
      </div>
      <div className='bg-white  h-fit min-w-[340px] w-full rounded-[16px] p-[16px]'>
      <p className='text-[#636363] text-[14px] '>Quick help</p>
      <div className='mt-[20px]'>
        <div className='flex flex-col gap-[10px]'>
          {supportCard.map((item, index) => (
            <div key={index} onClick={() => navigate('/transactiondispute')} className='flex items-center gap-[10px]  p-[5px]'>
              <img src={item.icon} alt={item.text} className='w-[24px] h-[24px]' />
              <p className='text-[#111111] text-[14px]'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className='bg-white  h-fit min-w-[340px] max-w-full rounded-[16px] p-[16px]'>
      <p className='text-[#636363] text-[14px] '>Suggest articles</p>
      <div className=''>
        {DisputeText.map((item, index) => (
          <div key={index} className='flex items-center gap-[12px]'>
            <p className='text-[#111111] text-[12px]'>{item.text}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Profile