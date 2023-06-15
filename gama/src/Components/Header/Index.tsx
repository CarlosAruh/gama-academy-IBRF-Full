import Link from "../Link/Index";
import "./style.css";

function Header(){
    return(<header>
    <p>Din Din</p>
    <nav>
        <Link texto="Curso" redirect="/curso" />
        <Link texto="Blog" redirect="/curso" />
        <Link texto="Contato" redirect="/contato" />
    </nav>
    </header>
    )
}

export default Header;