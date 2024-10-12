import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProfileDetail from './components/ProfileDetail'

export default function page() {
  return (
    <div>
      <Nav/>
      <Hero ProfileDetail={ProfileDetail}  />
    </div>
  )
}
