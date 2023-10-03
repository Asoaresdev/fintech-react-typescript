import React, { useState } from 'react'
import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {
    // //passou para o contexto
    // const [start, setStart] = useState("")
    // const [finish, setFinish] = useState("")

    const{start, setStart, finish, setFinish} = useData()

    return (
        <form className='box flex' onSubmit={(e)=>e.preventDefault}>
            <DateInput label="Início" value={start} onChange={({ target }) => setStart(target.value)} />
            
            <DateInput label="Final" value={finish} onChange={({ target }) => setFinish(target.value)} />
          
        </form>
    )
}

export default DateRange