import  { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import sparkle from '../../assets/sparkles-three.svg'
const SetupPin = () => {
  const [pin, setPin] = useState(['', '', '', ''])
  const [confirmPin, setConfirmPin] = useState(['', '', '', ''])
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate()

  const handlePinChange = (index: number, value: string, isConfirm: boolean = false) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      if (isConfirm) {
        const newConfirmPin = [...confirmPin]
        newConfirmPin[index] = value
        setConfirmPin(newConfirmPin)
      } else {
        const newPin = [...pin]
        newPin[index] = value
        setPin(newPin)
      }
    }
  }

  const handleSetupCard = () => {
    const pinString = pin.join('')
    const confirmPinString = confirmPin.join('')
    
    if (pinString.length === 4 && confirmPinString.length === 4 && pinString === confirmPinString) {
      setShowSuccess(true)
    }
  }

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        navigate('/dashboard/home')
      }, 4000) // 4 seconds
      
      return () => clearTimeout(timer)
    }
  }, [showSuccess, navigate])

  if (showSuccess) {
    return (
      <div className="fixed inset-0 gap-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#0D2F28] to-[#33FFC2]">
        <div className="text-6xl"><img src={sparkle} alt="Success" className='w-[80px] h-[80px]' /></div>
        <h2 className="text-2xl font-bold text-[#FFFFFF]">Success!</h2>
        <p className="text-[#FFFFFF]">Your GBP standard card is now ready to use.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between p-6 h-[100vh]">
      <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-semibold  text-[18px] mb-4">Enter 4 digit PIN</h3>
        <div className="flex gap-3 ">
          {pin.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              className="w-[64px] h-[74px] border-2 border-gray-300 rounded-lg text-center text-xl font-semibold focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold  text-[18px] mb-4">Confirm 4 digit PIN</h3>
        <div className="flex gap-3 ">
          {confirmPin.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value, true)}
              className="w-[64px] h-[74px] border-2 border-gray-300 rounded-lg text-center text-xl font-semibold focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
      </div>
      </div>

      <button 
        onClick={handleSetupCard}
        className="mb-1 w-full max-w-[358px] mx-auto bg-[#33FFC2] px-6 py-3 text-black rounded-[24px] font-semibold">Setup Card</button>
    </div>
  )
}

export default SetupPin