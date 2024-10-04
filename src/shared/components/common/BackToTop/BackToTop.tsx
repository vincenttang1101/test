'use client'
import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi' // Import the arrow icon

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 0)
  }

  // Calculate the scroll progress
  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = (scrollTop / docHeight) * 100
    setScrollProgress(scrollPercentage)
  }

  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    // Add scroll event listeners
    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', calculateScrollProgress)

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', calculateScrollProgress)
    }
  }, [])

  return (
    isVisible && (
      <div
        className='progress-wrap fixed bottom-5 right-6 h-14 w-14 cursor-pointer'
        onClick={scrollToTop}
        onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
        tabIndex={0}
        role='button'
        aria-label='Back to Top'
        style={{ borderRadius: '50%', overflow: 'hidden' }}
      >
        <svg className='h-full w-full' viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='49' stroke='#1c82ff' strokeWidth='6' fill='none'></circle>

          <path
            d='M50 50 m-49 0 a49 49 0 1 1 98 0 a49 49 0 1 1 -98 0'
            stroke='#007bff'
            strokeWidth='34'
            fill='none'
            style={{
              transition: 'stroke-dashoffset 10ms linear',
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: `${307.919 - (scrollProgress / 100) * 307.919}`
            }}
          ></path>
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <FiArrowUp size={20} color='#007bff' />
        </div>
      </div>
    )
  )
}
