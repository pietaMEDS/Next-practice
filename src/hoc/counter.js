'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const withCounter = (WrappedComponent) => {
  return function WithCounter(props) {
    const [counter, setCounter] = useState(0)
    
    return (
      <div>
        <Header />
        <Navigation counter={counter} setCounter={setCounter} />
        <WrappedComponent counter={counter} />
        <Footer counter={counter*2} />
      </div>
    )
  }
}