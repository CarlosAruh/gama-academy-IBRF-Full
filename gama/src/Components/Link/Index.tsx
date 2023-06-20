import "./style.css";
import {Link as LinkRout} from "react-router-dom";

interface LinkProps{
    texto: string;
    redirect: string;
}

export default function Link(props: LinkProps){
    return (
        <LinkRout className="Link-menu" to={props.redirect} >
            {props.texto}
        </LinkRout>
    )
}