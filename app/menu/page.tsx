import Contact from '@/components/home/Contact'
import Brownies from '@/components/menu/Brownies'
import Hero from '@/components/menu/Hero'
import Organic from '@/components/menu/Organic'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Organic />
      <Brownies />
      <Contact />
    </div>
  )
}

export default page