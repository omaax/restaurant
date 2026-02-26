import About from '@/components/landing/About'
import Contact from '@/components/landing/Contact'
import DeliciousBaking from '@/components/landing/DeliciousBaking'
import Items from '@/components/landing/Items'
import Landing from '@/components/landing/Landing'
import Mission from '@/components/landing/Mission'
import Mission2 from '@/components/landing/Mission2'
import React from 'react'

const page = () => {
  return (
    <div>
        <Landing />
        <DeliciousBaking />
        <Mission />
        <About />
        <Mission2 />
        <Items />
        <Contact />
    </div>
  )
}

export default page
