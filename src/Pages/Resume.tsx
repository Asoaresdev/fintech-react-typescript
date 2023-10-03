import { useData } from '../Context/DataContext'

const Resume = () => {
    const {data} = useData()
   
    if(data === null) return null

  return (
    <section>
      <div className='resumo flex box'>

        <div className='box'>
          <h2>Total Vendas</h2>
          <span>
            {data
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", {style:"currency", currency: "BRL"})
            }
          </span>
        </div>

        <div className='box'>
          <h2>Recebido</h2>
          <span>
            {data
            .filter((status)=> status.status === "pago")
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", {style:"currency", currency: "BRL"})
            }
          </span>
        </div>

        <div className='box'>
          <h2>Vendas em Processamento</h2>
          <span>
            {data
            .filter((status)=> status.status === "processando")
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", {style:"currency", currency: "BRL"})
            }
          </span>
        </div>

      </div>
      <div className='box'>Gráficos</div>
    </section>
  )
}

export default Resume
