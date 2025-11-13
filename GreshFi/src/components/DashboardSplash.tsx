import dashboardSplash from '../assets/dashboardimg.svg'
import { useNavigate } from 'react-router-dom'
const DashboardSplash = () => {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-colors duration-700 bg-[#0D2F28] flex-col">
        <img src={dashboardSplash} alt="dashboardSplash" className="" />
        <h6 className='font-semibold text-[#33FFC2] text-[20px]'>WELCOME ONBOARD, ARINOLA</h6>
        <p className='text-[14px] text-[#FFFFFF]'>You’re all set, continue to your dashboard.</p>
        <button onClick={() => navigate('/dashboard/home')} className='flex justify-center items-center py-3 rounded-[24px] shadow-md  overflow-hidden bg-[#33FFC2] text-[#111111] px-[16px] min-w-[348px] absolute bottom-[40px] font-semibold text-[16px] '>Take me to my dashboard</button>
    </div>
  )
}

export default DashboardSplash