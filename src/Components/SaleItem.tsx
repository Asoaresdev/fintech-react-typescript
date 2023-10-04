import React from 'react'
import { TSale } from '../Context/DataContext'
import { NavLink } from 'react-router-dom'

const SaleItem = ({sale}:{sale:TSale}) => {
  return (
    <div className='sale box'>
        <NavLink to={`/vendas/${sale.id}`} style={{fontFamily:"monospace"}}>
            {sale.nome}
        </NavLink>
        <div>{sale.nome}</div>
        <div>{sale.preco.
        toLocaleString("pt-br", {style:"currency", currency:"BRL"})}
        </div>
    </div>
  )
}

export default SaleItem