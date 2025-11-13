import React from 'react';

interface CreditCardIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const CreditCardIcon: React.FC<CreditCardIconProps> = ({ 
  color = "#E1E6E7", 
  width = 20, 
  height = 20 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16.6667 3.3335H3.33333C2.41286 3.3335 1.66666 4.07969 1.66666 5.00016V7.50016H18.3333V4.99915C18.3333 4.07734 17.5858 3.3335 16.6667 3.3335Z" 
        fill={color}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M1.66666 14.9998V9.1665H18.3333V14.9998C18.3333 15.9203 17.5872 16.6665 16.6667 16.6665H3.33333C2.41286 16.6665 1.66666 15.9203 1.66666 14.9998ZM5.83333 10.8332C5.3731 10.8332 5 11.2063 5 11.6665C5 12.1268 5.3731 12.4998 5.83333 12.4998H8.33333C8.79358 12.4998 9.16666 12.1268 9.16666 11.6665C9.16666 11.2063 8.79358 10.8332 8.33333 10.8332H5.83333Z" 
        fill={color}
      />
    </svg>
  );
};

export default CreditCardIcon;
