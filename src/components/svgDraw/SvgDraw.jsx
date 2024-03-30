// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react'
import "./SvgDraw.css"

function SvgDraw() {

  const svgRef = useRef(null)
  const pathRef = useRef(null)

  useEffect(() => {
    const svg = document.querySelector("svg.draw")
    const path = svg.querySelector("path")

    if (svg && path) {
      const pathLength = path.getTotalLength()

      path.style.strokeDasharray = `${pathLength}`
      path.style.strokeDashoffset = `${pathLength}` // Initially hide the entire path

      const scroll = () => {
        // Rest of your scroll function logic here
        // ... (calculate distance, totalDistance, percentage)
        const distance = window.scrollY
        const totalDistance = svg.clientHeight - window.innerHeight

        const percentage = distance / totalDistance
        path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
      }

      scroll()
      window.addEventListener('scroll', scroll)
    } else {
      console.error("SVG or path element not found!")
    }

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('scroll', scroll)
  }, [svgRef, pathRef]) // Dependency array to run effect only when refs change

  return (
    <div className='imga'> 
        <svg width="1681" height="2080" viewBox="0 0 1681 2080" fill="none" xmlns="http://www.w3.org/2000/svg" className='draw'>
            <path d="M15 15C1279.8 160.2 1441 337.5 1363.5 408C1312 464.5 1114.1 567.2 734.5 526C354.9 484.8 227.667 643.833 211.5 728.5C208.667 798 274.9 934.6 562.5 925C850.1 915.4 1176 971.333 1303 1000.5C1478.5 1030.5 1786.5 1117.2 1614.5 1224C1442.5 1330.8 1165.83 1359.5 1049 1360.5C920 1359.5 623.9 1333.9 471.5 1239.5C319.1 1145.1 214.667 1189.83 181.5 1224C151.333 1267.33 122.4 1363.1 248 1399.5C373.6 1435.9 657 1600 783 1677.5C901 1765.17 1140.6 1965.3 1155 2064.5" stroke="url(#paint0_linear_21_5)" strokeWidth="30" strokeLinecap="round" strokeDasharray="6 6"/>
            <defs>
            <linearGradient id="paint0_linear_21_5" x1="840.021" y1="15" x2="840.021" y2="2064.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16E2EF"/>
            <stop offset="0.485" stopColor="#11B3BE"/>
            <stop offset="1" stopColor="#0D8289"/>
            </linearGradient>
            </defs>
        </svg>

    </div>
  )
}

export default SvgDraw