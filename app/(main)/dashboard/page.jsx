import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'
import LatestInterviews from './_components/LatestInterviews'

function Dashboard() {
  return (
    <div>
        <WelcomeContainer />
        <h2 className='my-2 font-bold text-2xl'>Dashboard</h2>
        <CreateOptions />
        <LatestInterviews />
    </div>
  )
}

export default Dashboard