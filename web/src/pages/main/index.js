import React from 'react'

import SectionDashboard from './components/dashboard'
import SectionDonate from './components/donate'
import SectionAbout from './components/about'
import SectionPartners from './components/partners'
import SectionContact from './components/contact'

export default function Main () {
  return (
    <>
      <SectionDashboard />
      <SectionDonate />
      <SectionAbout />
      <SectionPartners />
      <SectionContact />
    </>
  )
}
