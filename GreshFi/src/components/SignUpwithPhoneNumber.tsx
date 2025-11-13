import { useDispatch } from "react-redux";
import {setRegistrationNumber} from "../redux/slice/CountrySlice"
import GetStartedWrapper from './GetStartedWrapper'

const SignUpwithPhoneNumber = () => {
  const dispatch = useDispatch()
  return (
    <GetStartedWrapper>

      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[12px] flex-col'>
          <h5 className='font-bold text-[#000000] text-[24px]'>Lets sort you out!</h5>
          <p className='w-[275px] text-[16px] font-normal'>We need your email or phone number,
            to verify your account.</p>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[10px]'>
            <p>Phone Number </p>
            <input type='text' onChange={(e) => dispatch(setRegistrationNumber(e.target.value)) } placeholder='081*********' className='rounded-[12px] border shadow-sm py-[12px] px-[16px] bg-[#FFFFFF]'/>
            <p className='font-medium text-[#0D2F28] text-[14px]'>Use your <a> Email address instead </a>  </p>
          </div>
        </div>

<p className='font-normal text-[#0D2F28] text-[14px]'>

        Do you have an account?  <span className='font-medium text-[#0D2F28] text-[14px]'>Log in</span>
</p>
      </div>
    </GetStartedWrapper>
  )
}

export default SignUpwithPhoneNumber