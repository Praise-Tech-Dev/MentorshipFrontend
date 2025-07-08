import React from 'react'
import Home from './pages/Home'
import Router from './route/Router'
import Header from './components/Header'

export default function App() {
  return (
    <div className=''>
      <header><Header/></header>
      <main><Router/></main>
      {/* <Router/> */}
    </div>
  )
}
