import React from 'react'
import Profile from './Components/Profile'
import Profile2 from './Components/Profile2'



export const App = () => {
  return (
    <div className='dark:bg-purple-950  bg-rose-200 h-max text-center text-white'>
      <div className='pt-10'>
        <h1 className='text-6xl font-bold'>ScriptToori</h1>
        <h2 className='text-4xl mt-10 font-bold'>coming soon ...</h2>
      </div>
      <Profile />
      <Profile2 />
    </div>
  )
}
