import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='background'>
    <div className='login-container'>
        <h1 className='text'>Welcome to Task Rabbit</h1>
        <p>Please Login Before visiting</p>
        <Link to='/login'>Login</Link>
    </div>
    </div>
  )
}

export default Home