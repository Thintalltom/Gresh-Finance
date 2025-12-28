import { useNavigate } from "react-router-dom"
import leftIcon from '../../assets/arrow-left.svg'
// import { FormField } from "../FormField"
const EditProfile = () => {
    const navigate = useNavigate()
  return (
       <div className='h-screen bg-gradient-to-b from-[#0D2F28] to-[#33FFC2]  p-[10px]'>
            <button onClick={() => navigate(-1)} className='pt-[30px] '>
                <img src={leftIcon} />
            </button>
            
            
            <h5 className="font-semibold text-[24px] text-white">Edit Profile</h5>

            <p className="text-[16px] text-white font-medium">Personal Information</p>

            <div>
                {/* <FormField label="Full Name" />
                <FormField label="Email Address" />
                <FormField label="Phone Number" />
                <FormField label="NIN" /> */}
                <div className="flex justify-center">
                    <button className="bg-[#0c342c] text-white px-4 py-2 rounded-lg mt-4">
                        Save Changes
                    </button>
                </div>
            </div>
            </div>
  )
}

export default EditProfile