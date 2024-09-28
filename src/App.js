import React from 'react'
import Profile from './Components/Profile'
import Profile2 from './Components/Profile2'



export const App = () => {
  return (
    <div className='dark:bg-blue-950 bg-rose-200 h-max text-center text-white'>
      <div className='pt-10'>
        <h1 className='text-6xl font-bold'> A&N Groups</h1>
      </div>
      <Profile />
      <Profile2 />
    </div>
  )
}
