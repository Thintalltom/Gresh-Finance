import { useNavigate } from "react-router-dom"
import account from '../../assets/people-circle.svg'
import questionMark from '../../assets/circle-questionmark.svg'
import fileText from '../../assets/file-text.svg'
import InboxIcon from '../../assets/email-notification.svg'
import AboutIcon from '../../assets/G.svg'
import notificationIcon from '../../assets/bell.svg'
import shieldIcon from '../../assets/shield-keyhole.svg'
import logoutIcon from '../../assets/arrow-box-left.svg'
import cancelBtn from '../../assets/Vector.svg'
const UserProfile = () => {
    const navigate = useNavigate()
    const userProfileDetails = [
        {
            name: 'Account profile',
            icon: account,
            route: '/userProfile/userAccount'
        }, 
         {
            name: 'Help',
            icon: questionMark,
            route: '/userProfile/help'
        }, 
         {
            name: 'Inbox',
            icon: InboxIcon,
            route: '/userProfile/inbox'
        }, 
         {
            name: 'Statements',
            icon: fileText,
            route: '/userProfile/statements'
        },

    ]
    const userProfileSettings = [
        {
            name: 'Security',
            icon: shieldIcon,
            route: '/userProfile/security'
        },
        {
            name: 'Notification',
            icon: notificationIcon,
            route: '/userProfile/notification'
        },
         {
            name: 'About us',
            icon: AboutIcon,
            route: '/userProfile/about'
        }
    ]
    return (
        <div className=" p-[20px] bg-[#F8FAFC] h-full">
            <button onClick={() => navigate('/dashboard/home')}> 
                <img src={cancelBtn} alt="cancel button" className="w-[11.4px] h-[11.4px]" />
                 </button>

            <div className="w-full  flex flex-col gap-[10px] justify-center items-center">
                <div className=" w-[50px] h-[50px] rounded-full bg-[#33FFC2] flex justify-center items-center">
                    <p>TA</p>
                </div>
                <p>Arinola Majiyagbe</p>
            </div>

        <div className="border-[1px] mt-[10px] border-[#D9D9D9] rounded-[16px] p-[16px] ">
        {
            userProfileDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px] p-[10px] cursor-pointer hover:bg-gray-100 rounded" onClick={() => navigate(item.route)}>
                    <img src={item.icon} alt={item.name} className="w-[14px] h-[14px]" />
                    <p>{item.name}</p>
                </div>
            ))
        }
        </div>

         <div className="border-[1px] mt-[10px] border-[#D9D9D9] rounded-[16px] p-[16px] ">
        {
             userProfileSettings.map((item, index) => (
                <div key={index} className="flex items-center gap-[10px] p-[10px] cursor-pointer hover:bg-gray-100 rounded" onClick={() => navigate(item.route)}>
                    <img src={item.icon} alt={item.name} className="w-[14px] h-[14px]" />
                    <p>{item.name}</p>
                </div>
            ))
        }
        </div>

        <div className="min-h-[150px] flex justify-center items-center">
            <button className="w-full mt-[10px] bg-[#C8102E] px-[16px] py-[12px] rounded-[24px] flex text-white justify-center gap-[10px] items-center">Logout <span>
                <img src={logoutIcon} alt="Logout" className="w-[24px] h-[24px]" />
                </span></button>
        </div>
        <div className="flex justify-center items-center gap-[20px] flex-col">
            <p className="text-[#636363]">Version 1.1</p>
            <p className="text-[#636363]">Gresh Finance Ltd</p>
            </div>
        </div>
    )
}

export default UserProfile