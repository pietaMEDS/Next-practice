'use client'
import { withCounter } from '@/hoc/counter'

function Home({ counter }) {
  return (
    <main>
      <div className="container">
        <p>
          Счётчик: 
          <br />
          <span id="count">{counter}</span>
        </p>
      </div>
    </main>
  )
}

export default withCounter(Home)