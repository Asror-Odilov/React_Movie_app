import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const OpenningLayer = () => {
    
    const anim = {
      exit: {opacity: 0},
    }
   
    const animation = {
      hidden: { y: 0},
      show: { y: '-160vh',
      transition: { duration: 1.5, delay: 2}  
    }}

    const animation1 = {
      hidden: { y: '100vh'},
      show: { y: '-100vh',
      transition: { duration: 1.5, delay: 2.3}  
    }}

    const animation2 = {
      hidden: { y: '120vh'},
      show: { y: '-100vh',
      transition: { duration: 1.5, delay: 0.2}  
    }}

    const radius = [30, 60, 60, 120, 90, 60, 30]
    const animation3 = {
      show: { rotate: 495, borderRadius: radius,
      transition: { duration: 2,}  
    }}

   

  return (
      <div>
        <motion.div className='cover cover0' 
            variants={animation}
            initial="hidden"
            animate="show"
        >
          <Square as={motion.div} 
            variants={animation3}
            initial="hidden"
            animate="show"
          />
        </motion.div>
        <motion.div className='cover cover1' 
            variants={animation1}
            initial="hidden"
            animate="show"
        />
          {/* <motion.div className='cover cover2' 
            variants={animation2}
            initial="hidden"
            animate="show"
        /> */}
       </div>

    

  )
}

export default OpenningLayer

const Square = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  position: relative;
  top: -20%;
  border: 3px solid rgba(249, 249, 249, 0.5);
  background: linear-gradient( #0b0a1f, #0d1016);
`