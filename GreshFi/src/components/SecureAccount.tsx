import React, { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import GetStartedWrapper from './GetStartedWrapper'
import tick from '../assets/tick.png'
import { useNavigate } from 'react-router-dom'
const SecureAccount = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const passwordRequirements = [
        { text: '8 characters', isValid: password.length >= 8 },
        { text: 'An uppercase letter', isValid: /[A-Z]/.test(password) },
        { text: 'A lowercase letter', isValid: /[a-z]/.test(password) },
        { text: 'A number', isValid: /\d/.test(password) },
        { text: 'A special character', isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    ]
    const navigate = useNavigate()
    // const handleContinue = () => {
    //     if (password === confirmPassword) {
    //         navigate('/get-started/3')
    //     }
    // }
    const handleBack = () => {
    navigate(-1) // Go back to previous page
  }
   const handleContinue = () => {
    // console.log('Form data:', formData)
    // Navigate to verification step
    navigate('/dashboardSplash')
  }
    return (
        <GetStartedWrapper
          onBack={handleBack}
          onContinue={handleContinue}
        >

            <div className='w-full grid grid-cols-2'>
                <h5 className='font-bold text-[20px] text-nowrap'>Secure your account</h5>
                <div className="flex items-center justify-end mb-6">
                    <StepIndicator currentStep={2} totalSteps={2} />
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <p className='text-[14px] '>
                    Password
                </p>
                <input 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-gray-300 rounded-[12px] p-[12px] mt-[8px] mb-[16px]' 
                    placeholder='Enter password' 
                />

                <p className='text-[14px] '>
                    Re-enter Password
                </p>
                <div className='relative'>
                    <input 
                        type='password' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`border rounded-[12px] p-[12px] mt-[8px] mb-[16px] w-full ${
                            confirmPassword && password === confirmPassword 
                                ? 'border-[#0D2F28]' 
                                : confirmPassword 
                                ? 'border-red-300' 
                                : 'border-gray-300'
                        }`}
                        placeholder='Enter password again' 
                    />
                    {confirmPassword && password === confirmPassword && (
                        <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            <img src={tick} alt='tick' className='w-[12px] h-[12px]' />
                        </div>
                    )}
                </div>

            </div>
            
            {confirmPassword && password !== confirmPassword && (
                <div className='text-red-500 text-[12px] mb-4'>
                    Passwords do not match
                </div>
            )}

            <div className='flex flex-wrap gap-2'>
                {passwordRequirements.map((requirement, index) => (
                    <div key={index} className={`border-[0.5px] border-gray-300 rounded-[16px] text-[12px] py-[8px] px-[12px] flex items-center gap-2 ${
                        requirement.isValid ? 'bg-white border-[#0D2F28]' : 'bg-white border-[#D9D9D9]'
                    }`}>
                     
                        <span className={requirement.isValid ? 'text-[#111111]' : 'text-[#98A2B3]'}>
                            {requirement.text}
                        </span>
                           {requirement.isValid && (
                            <span className=' text-[14px]'>
                                <img src={tick} alt='tick' className='w-[12px] h-[12px]' />
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </GetStartedWrapper>
    )
}

export default SecureAccount