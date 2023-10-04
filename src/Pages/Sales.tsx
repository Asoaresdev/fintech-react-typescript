import React from 'react'
import { useData } from '../Context/DataContext'
import SaleItem from '../Components/SaleItem'

const Sales = () => {

    const {data} = useData()
    if(data === null) return null
  return (
    <ul>
        {data.map((sale) => {
            return(
                <li key={sale.id}>
                    <SaleItem sale={sale}/>
                </li>
            )
        })}
    </ul>
  )
}

export default Sales