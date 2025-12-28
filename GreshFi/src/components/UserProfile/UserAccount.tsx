
import { useNavigate } from 'react-router-dom'
import leftIcon from '../../assets/arrow-left.svg'
import logout from '../../assets/broken-heart.svg'
import infoIcon from '../../assets/circle-info.svg'
import bankIcon from '../../assets/bank.svg'
import peopleIcon from '../../assets/people.svg'
import fileIcon from '../../assets/file-text.svg'
import passwordIcon from '../../assets/password.svg'
const UserAccount = () => {
    const navigate = useNavigate()
    const userDetails = [
        {
            name: 'Personal details',
            icon: peopleIcon,
            link: '/userProfile/edit-info'
        },
        {
            name: 'Account details',
            icon: bankIcon,
            link: '/user-profile/personal-information'
        },
        {
            name: 'Change passcode',
            icon: passwordIcon,
            link: '/user-profile/personal-information'
        }

    ]

    const privacyDetails = [
        {
            name: 'Privacy policy',
            icon: fileIcon,
            link: '/user-profile/personal-information'
        },
        {
            name: 'Terms & conditions',
            icon: infoIcon,
            link: '/user-profile/personal-information'
        }

    ]
    const deactivateDetails = [
        {
            name: 'Deactivate your account',
            icon: logout,
            link: '/user-profile/personal-information'
        }

    ]
    return (
        <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2]  p-[10px]'>
            <button onClick={() => navigate(-1)} className='pt-[30px] '>
                <img src={leftIcon} />
            </button>
            <p className='font-semibold text-[24px] text-white'>Account Profile</p>

            <div className='bg-white  rounded-[16px] mt-[24px] p-[16px] min-w-[358px] w-full'>
                {userDetails.map((item, index) => (
                    <div className='flex items-center justify-between mb-[16px]' key={index}>
                        <div className='flex items-center gap-[8px]'  onClick={() => navigate(item.link)}>
                            <img src={item.icon} />
                            <p className='font-semibold text-[16px] text-[#111111]'>{item.name}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
             <div className='bg-white  rounded-[16px] mt-[24px] p-[16px] min-w-[358px] w-full'>
                {privacyDetails.map((item, index) => (
                    <div className='flex items-center justify-between mb-[16px]' key={index}>
                        <div className='flex items-center gap-[8px]' onClick={() => navigate(item.link)}>
                            <img src={item.icon} />
                            <p className='font-semibold text-[16px] text-[#111111]'>{item.name}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
            <div className='bg-white  rounded-[16px] mt-[24px] p-[16px] min-w-[358px] w-full'>
                {deactivateDetails.map((item, index) => (
                    <div className='flex items-center justify-between ' key={index}>
                        <div className='flex items-center gap-[8px]'>
                            <img src={item.icon} />
                            <p className='font-semibold text-[16px] text-[#111111]'>{item.name}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserAccount