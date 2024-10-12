import React from 'react'
import Nav from '../components/Nav'
import LinksStart from '../components/LinksStart'
import Hero from '../components/Hero'

export default function page() {
  return (
    <div>
      <Nav/>
      <Hero  LinksStart={LinksStart} />
    </div>
  )
}
