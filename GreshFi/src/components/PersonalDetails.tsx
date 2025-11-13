import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PersonalInfoForm } from './PersonalInforForm'

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    nin: ''
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const navigate = useNavigate()

  const handleContinue = () => {
    // console.log('Form data:', formData)
    // Navigate to verification step
    navigate('/secureAccount')
  }

  const handleBack = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <PersonalInfoForm
      formData={formData}
      updateFormData={updateFormData}
      onContinue={handleContinue}
      onBack={handleBack}
      showValidation={false}
    />
  )
}

export default PersonalDetails