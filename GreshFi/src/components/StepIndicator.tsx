// import React from 'react'

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex flex-col justify-center  items-center gap-[5px]">
      <div className="flex items-center gap-1">

      <span className="text-black font-medium">{currentStep}</span>
      <span className="text-black">of</span>
      <span className="text-black font-medium">{totalSteps}</span>
      </div>
      <div className="ml-2 h-1 w-12 bg-gray-200 rounded-full">
        <div
          className="h-full bg-green-400 rounded-full"
          style={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  )
}