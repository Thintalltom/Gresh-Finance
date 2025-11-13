import GetStartedWrapper from './GetStartedWrapper'
import { setOtp } from "../redux/slice/CountrySlice"
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import OtpInput from './OtpInput';
const OTPScreen = () => {
    const dispatch = useDispatch()
    const [timer, setTimer] = useState(50);
    
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);
    
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
   
    return (
        <GetStartedWrapper>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='font-bold text-[24px] w-[275px]'>We’ve sent the code
                    to your email.</h3>

                <p className='text-[16px]'>We’ve sent a 6-digit code to example@youremail.com</p>
                <OtpInput
                    length={6}
                    separatorIndex={3}
                    onChange={(val) => {
                        setOtp(val);
                        dispatch(setOtp(val));
                    }}
                />

                <p className='text-[14px] text-[#0D2F28] font-medium'>
                    {timer > 0 ? `Resend Code in ${formatTime(timer)}` : 'Resend Code'}
                </p>
                <p className='text-[14px]'>Do you have an account? <span className='font-bold text-[14px]'>Login</span></p>
            </div>
        </GetStartedWrapper>
    )
}

export default OTPScreen