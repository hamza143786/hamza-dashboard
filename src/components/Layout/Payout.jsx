import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopNav from '../TopNav/TopNav'
import Router from '../../routes/Router'

const Payout = () => {
  return (
       <div className='layout'>
      <SideBar />
      <div className='main_layout'>
        <TopNav />

        <div className='content'>
          <Router />
        </div>
      </div>
    </div>
  )
}

export default Payout
