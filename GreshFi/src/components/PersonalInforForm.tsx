import React, { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { FormField } from './FormField'
import GetStartedWrapper from './GetStartedWrapper'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nin: string;
}

interface PersonalInfoFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onContinue: () => void;
  onBack: () => void;
  showValidation?: boolean;
}

export function PersonalInfoForm({
  formData,
  updateFormData,
  onContinue,
  onBack,
  showValidation = false,
}: PersonalInfoFormProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVerified, setIsVerified] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    updateFormData({
      [field]: value,
    })
  }

  const handleContinue = () => {
    setIsVerifying(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsVerifying(false)
          setIsVerified(true)
          setTimeout(() => onContinue(), 500) // Small delay to show ticks
          return 100
        }
        return prev + 20
      })
    }, 1000)
  }
  return (
    <GetStartedWrapper 
      onBack={onBack} 
      onContinue={handleContinue} 
      continueLabel={isVerifying ? "Verifying Details..." : "Continue"}
      isLoading={isVerifying}
      progress={progress}
    >
      <div className="flex items-center justify-end mb-6">
        <StepIndicator currentStep={1} totalSteps={2} />
      </div>
      <h1 className="text-2xl font-bold mb-6">Personal Information</h1>
      <div className="flex-1">
        <FormField
          label="First Name"
          value={formData.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('firstName', e.target.value)}
          showValidation={isVerified}
          validated={isVerified && formData.firstName.length > 1}
        />
        <FormField
          label="Last Name"
          value={formData.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('lastName', e.target.value)}
          showValidation={isVerified}
          validated={isVerified && formData.lastName.length > 1}
        />
        <FormField
          label="Email address"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
          showValidation={isVerified}
          validated={isVerified && formData.email.includes('@') && formData.email.includes('.')}
        />
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <div className="flex">
            <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-2 mr-2">
              <div className="w-6 h-4 mr-1 flex items-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-full bg-green-600"></div>
                    <div className="w-1/3 h-full bg-white"></div>
                    <div className="w-1/3 h-full bg-green-600"></div>
                  </div>
                </div>
              </div>
              <span className="text-sm">+234</span>
            </div>
            <div className="relative flex-1">
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('phoneNumber', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-800"
              />
              {isVerified && formData.phoneNumber.length === 11 && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="h-5 w-5 text-green-500">✓</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <FormField
          label="NIN"
          value={formData.nin}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('nin', e.target.value)}
          showValidation={isVerified}
          validated={isVerified && formData.nin.length === 11}
        />
        {showValidation && (
          <div className="bg-[#0c342c] text-white p-4 rounded-lg mt-4">
            <h3 className="font-medium mb-1">Note</h3>
            <p className="text-sm text-gray-200">
              Please check to make sure the details fetched are yours before
              proceeding.
            </p>
          </div>
        )}
      </div>
    </GetStartedWrapper>
  )
}
