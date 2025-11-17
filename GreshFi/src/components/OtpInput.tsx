import React, { useState, useRef, useEffect } from "react";

type OtpInputProps = {
  length?: number; // e.g., 6
  onChange: (otp: string) => void;
  separatorIndex?: number; // e.g., 3 for "xxx-xxx"
  className?: string;
};

const OtpInput: React.FC<OtpInputProps> = ({
  length = 6,
  onChange,
  separatorIndex,
  className = "",
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    onChange(values.join(""));
  }, [values, onChange]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9a-zA-Z]?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move to next input
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, length).split("");
    setValues(pasteData.concat(Array(length - pasteData.length).fill("")));
  };

  return (
    <div className={`flex items-center gap-2 justify-center ${className}`}>
      {Array.from({ length }).map((_, i) => (
        <React.Fragment key={i}>
          <input
            ref={(el) => { inputsRef.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={values[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            className="w-10 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
          />
          {separatorIndex && i === separatorIndex - 1 && (
            <span className="text-xl font-medium text-gray-500">-</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtpInput;
