import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center text-orange-700 text-3xl bg-slate-700 '>User : {userid} </div>
  )
}

export default User