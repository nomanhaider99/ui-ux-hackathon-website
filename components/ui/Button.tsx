import React from 'react'

interface ButtonProps {
  text: string,
  className?: string,
  type?: 'submit' | 'button',
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, className, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primarycolor text-[15px] leading-[24px] text-center px-4 py-2 rounded-full text-white ${className}`}
    >
      {text}
    </button>
  )
}

export default Button