import "./style.css";

interface LinkProps{
    texto: string;
    redirect: string;
}

export default function Link(props: LinkProps){
    return (
        <a className="Link-menu" href={props.redirect} target="_black" rel="noreferr">
            {props.texto}
        </a>
    )
}