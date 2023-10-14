import React from 'react'
import UserHistoryFilter from '../component/UserHistoryFilter'
import UserTable from '../component/UserTable'
import { tableColumns } from '../constants/headers'

const UserHistory = () => {
  return (
  <>
    <div className='history-container'>
        <UserHistoryFilter/>
        <UserTable columns = {tableColumns}/>

    </div>
  </>
  )
}

export default UserHistory