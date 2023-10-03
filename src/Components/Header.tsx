import React from 'react'
import { useData } from '../Context/DataContext'
import DateRange from './DateRange';
import Months from './Months';

const Header = () => {
    // const {data} = useData()
    // console.log(data);
    
  return (
    <header className='mb'>
      <div className='mb'>
        <DateRange />
      </div>
      <Months />
    </header>
  )
}

export default Header