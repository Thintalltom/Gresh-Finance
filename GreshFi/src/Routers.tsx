import { Routes, Route } from 'react-router-dom'
import Country from './components/Country'
import SignUpwithPhoneNumber from './components/SignUpwithPhoneNumber'
import OTPScreen from './components/OTPScreen'
import PersonalDetails from './components/PersonalDetails'
import SecureAccount from './components/SecureAccount'
import DashboardSplash from './components/DashboardSplash'
import MainDashboard from './components/Dashboard/MainDashboard'
import DashboardWrapper from './components/Dashboard/DashboardWrapper'
import Wallet from './components/Dashboard/Wallet'
import Profile from './components/Dashboard/Profile'
import Transactions from './components/Dashboard/Transactions'
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path="/country" element={<Country />} />
      <Route path="/SignUpwithPhoneNumber" element={<SignUpwithPhoneNumber />} />
      <Route path="/Otpscreen" element={<OTPScreen />} />
      <Route path="/personalDetails" element={<PersonalDetails />} />
      <Route path="/secureAccount" element={<SecureAccount />} />
      <Route path='/dashboardSplash' element={<DashboardSplash />} />
      <Route path='/dashboard/*' element={
        <DashboardWrapper>
          <Routes>
            <Route path='home' element={<MainDashboard />} />
             <Route path='wallets' element={<Wallet />} />
              <Route path='transactions' element={<Transactions />} />
               <Route path='profile' element={<Profile />} />
            {/* Add more dashboard routes here */}
          </Routes>
        </DashboardWrapper>
      } />
      <Route path='/mainDashboard' element={<MainDashboard />} />
    </Routes>
  )
}

export default Routers