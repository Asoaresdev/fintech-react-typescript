import React from 'react'
import { TSale } from '../Context/DataContext'

const SaleItem = ({sale}:{sale:TSale}) => {
  return (
    <div className='sale box'>
        <a href="" style={{fontFamily:"monospace"}}>
            {sale.nome}
        </a>
        <div>{sale.nome}</div>
        <div>{sale.preco.
        toLocaleString("pt-br", {style:"currency", currency:"BRL"})}
        </div>
    </div>
  )
}

export default SaleItem