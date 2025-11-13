import React from 'react';

interface HomeLineIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const HomeLineIcon: React.FC<HomeLineIconProps> = ({ 
  color = "#33FFC2", 
  width = 20, 
  height = 20 
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M8.949 1.44687C9.56133 0.949346 10.4387 0.949354 11.051 1.44687L16.8843 6.18645C17.2738 6.50294 17.5 6.97811 17.5 7.47998V15.8334C17.5 16.7539 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8334V7.47998C2.5 6.97811 2.72616 6.50294 3.11568 6.18645L8.949 1.44687ZM6.66667 12.5C6.20643 12.5 5.83333 12.8731 5.83333 13.3334C5.83333 13.7936 6.20643 14.1667 6.66667 14.1667H13.3333C13.7936 14.1667 14.1667 13.7936 14.1667 13.3334C14.1667 12.8731 13.7936 12.5 13.3333 12.5H6.66667Z" 
        fill={color}
      />
    </svg>
  );
};

export default HomeLineIcon;
