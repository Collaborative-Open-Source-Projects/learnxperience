import { useState } from 'react'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-bold text-left text-purple-900 bg-purple-100 border border-purple-300 rounded-lg hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        onClick={handleClick}
      >
        <span>{title}</span>
        <svg
          className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="px-4 py-2">{children}</div>}
    </div>
  )
}

export default Accordion
