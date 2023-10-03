import React from 'react'
import MonthBtn from './MonthBtn'

const Months = () => {
  return (
    <div className='flex'>
        <MonthBtn month={-2} />
        <MonthBtn month={-1}/>
        <MonthBtn month={0}/>
    </div>
  )
}

export default Months