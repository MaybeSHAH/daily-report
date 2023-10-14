import React from 'react'
import UserInProgressHeader from '../component/UserInProgressHeader'
import UserTable from '../component/UserTable'


const UserInProgress = () => {


  return (
    <>
      <div className='in-progress-container'>
        <UserInProgressHeader />
        <UserTable />
      </div>
    </>
  )
}



export default UserInProgress