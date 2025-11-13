import  { useState, useEffect } from 'react';
import { ArrowLeftIcon } from 'lucide-react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import type { RootState } from '../redux/store';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetStartedWrapper = ({
  children,
  onBack,
  onContinue,
  continueLabel = 'Continue',
  isLoading = false,
  progress = 0,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const selectedCountry = useSelector((state: RootState) => state.Country.selectedCountry);
  const selectedPhone = useSelector((state: RootState) => state.Country.registrationNumber);
  const otp = useSelector((state: RootState) => state.Country.Otp);
  const location = useLocation();
  // Detect mobile keyboard by viewport resize
  useEffect(() => {
    const handleResize = () => {
      // heuristic: if viewport height shrinks significantly, keyboard is probably open
      if (window.innerHeight < 500) {
        setKeyboardOpen(true);
      } else {
        setKeyboardOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useNavigate()
  const handleNavigate = () => {
    // If onContinue prop is provided, use it (for custom forms like PersonalDetails)
    if (onContinue) {
      onContinue();
      return;
    }
    
    // Otherwise use internal navigation logic
    if(location.pathname === '/country' && selectedCountry) {
      setTimeout(() => {
        navigate('/SignUpwithPhoneNumber')
      }, 100)
    } else if(location.pathname === '/SignUpwithPhoneNumber' && selectedPhone) {
      setTimeout(() => {
        navigate('/Otpscreen')
      }, 100)
    } else if(location.pathname === '/Otpscreen' && otp.length === 6) {
      setTimeout(() => {
        navigate('/personalDetails')
      }, 100)
    }
  }
  const selected = onContinue ? true : (selectedCountry || selectedPhone || (otp.length === 6))
  return (
    <div className="fixed inset-0 flex flex-col bg-white">
      {/* Top Back Arrow */}
      <div className="flex items-center p-4 border-b">
        <button onClick={onBack} className="p-2">
          <ArrowLeftIcon size={24} />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-4 py-2">{children}</div>
      {
       location.pathname === '/country' ? <div className='flex justify-center items-center px-4'> <div className='bg-[#0D2F28] rounded-[12px] p-[16px] w-full max-w-[400px] flex flex-col gap-[12px]'>
        <p className='text-white font-bold'>Please note</p>
        <p className='text-white'>The documents we require for KYC depends on the country you select.</p>
         </div> </div> : null
      }
      {/* Continue Button */}
      <div
        className={`p-4 transition-all duration-200 ${
          keyboardOpen ? 'mb-40' : 'mb-0'
        }`}
      >
        <button
          onClick={handleNavigate}
          disabled={isLoading}
          className={`w-full ${
            selected ? 'bg-[#33FFC2] text-[#111111]' : 'bg-[#33FFC2] text-gray-500 opacity-50'
          } py-3 rounded-[24px] shadow-md relative overflow-hidden`}
        >
          {isLoading && (
            <div 
              className="absolute left-0 top-0 h-full bg-green-400 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          )}
          <span className="relative z-10">{continueLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default GetStartedWrapper;
