import ContactUs from '@/components/about/ContactUs'
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
      <ContactUs />
    </div>
  )
}

export default page