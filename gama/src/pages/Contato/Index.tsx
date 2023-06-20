import Header from "../../Components/Header/Index";
import {useParams} from "react-router-dom"

export default function Contatos(){
    const params = useParams();
    return(
        <div>
            <Header/>
            <h1>Pagina de contatos</h1>
            <h2>Olá {params.id}</h2>
        </div>
    )
}