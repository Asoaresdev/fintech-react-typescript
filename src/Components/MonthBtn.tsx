import React from 'react'
import * as S from "./StyleMonthBtn"
import { useData } from '../Context/DataContext'

function nameMonth(n: number) {
    const date = new Date()
    // console.log(date.getMonth() + n);
    date.setMonth(date.getMonth() + n)
    const monthInPortuguese = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
    // console.log(monthInPortuguese);
    return monthInPortuguese
}

function formatedDate(date:Date) {
    const dd = String(date.getDate()).padStart(2,"0")
    const mm = String(date.getMonth() + 1).padStart(2,"0")
    const yyyy = String(date.getFullYear() )
    return `${yyyy}-${mm}-${dd}`
}

const MonthBtn = ({ month }: { month: number }) => {
    const {setStart, setFinish} = useData()

    function setMonth(n:number){
        const date = new Date()
    // console.log(date.getMonth() + n);
        date.setMonth(date.getMonth() + n)

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
        // proximo mês com dia 0, isto é, dia anterior do inicio do proximo mês
        setStart(formatedDate(firstDay))
        setFinish(formatedDate(lastDay))
        
    }
    // setMonth(month)
    
    return (
        <button style={S.MonthBtn} onClick={() => setMonth(month)}>
            {nameMonth(month)}
        </button>
    )
}

export default MonthBtn