import React from 'react'

interface ButtonProps {
  text: string,
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`bg-primarycolor text-[15px] leading-[24px] text-center px-4 py-2 rounded-full text-white ${className}`}
    >
      {text}
    </button>
  )
}

export default Button