import  {  Routes, Route } from 'react-router-dom'
import Country from './components/Country'
import SignUpwithPhoneNumber from './components/SignUpwithPhoneNumber'
import OTPScreen from './components/OTPScreen'
import PersonalDetails from './components/PersonalDetails'

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={null} />
        <Route path="/country" element={<Country />} />
        <Route path="/SignUpwithPhoneNumber" element={<SignUpwithPhoneNumber />} />
                <Route path="/Otpscreen" element={<OTPScreen />} />
                        <Route path="/personalDetails" element={<PersonalDetails />} />
      </Routes>
  )
}

export default Routers