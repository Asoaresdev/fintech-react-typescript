import React from "react"
import useFetch from "../Hooks/useFetch"

type TDataContext = {
    data: TSale[] | null
    loading:boolean,
    error: string | null,
    start: string,
    finish: string,
    setStart: React.Dispatch<React.SetStateAction<string>>,
    setFinish: React.Dispatch<React.SetStateAction<string>>
}

type TSale = {
    id: string,
    nome: string,
    preco: number,
    status: "pago" | "processando" | "falha",
    pagamento: "boleto" | "pix" | "cartao",
    parcelas: number | null,
    data: string
}
const DataContext = React.createContext<TDataContext | null>(null)

export const useData = () => {
    const context = React.useContext(DataContext)
    if(!context) throw new Error("Erro no context")
    return context
}

function getupdatedDate(n:number) {
    const date = new Date()
    // setar uma data especifica, para trás, a partir de hoje 
    date.setDate(date.getDate() - n)
    const dd = String(date.getDate()).padStart(2,"0")
    const mm = String(date.getMonth() + 1).padStart(2,"0")
    const yyyy = String(date.getFullYear() )
    // console.log(date);
    // console.log(dd);
    // console.log(mm);
    // console.log(yyyy);
    // console.log(`${dd}-${mm}-${yyyy}`);
    return `${yyyy}-${mm}-${dd}`
}


export const DataContextProvider = ({ children } : React.PropsWithChildren) =>{
    const [start, setStart] = React.useState(getupdatedDate(30))
    const [finish, setFinish] = React.useState(getupdatedDate(0))

    const { data, loading, error } = useFetch<TSale[]>(`https://data.origamid.dev/vendas/?inicio=${start}&final=${finish}`)
    return( 
        <DataContext.Provider value = {{data, loading, error, start, setStart, finish, setFinish}}>
            { children }
        </DataContext.Provider>
    )
}