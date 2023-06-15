import "./style.css";

interface BoxProps{
    background: string;
    children: React.ReactNode;
}

export default function Box (props:BoxProps){
    return <section className={`box ${props.background}`}>{props.children}</section>;
} 