import React from 'react'
import { CheckCircleIcon } from 'lucide-react'
export function FormField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  showValidation = false,
  validated = false,
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        {label !== 'Email address' && label !== 'Phone number' && (
          <div className="ml-2 w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-xs text-gray-400">i</span>
          </div>
        )}
      </div>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-800"
        />
        {showValidation && validated && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
    </div>
  )
}
