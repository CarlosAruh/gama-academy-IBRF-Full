import Link from "../Link/Index";
import Logo from "../../assets/Images/logo.png"
import "./style.css";

function Header(){
    return(<header>
    <p>Din Din</p>
    <img src={Logo} alt="Logo do dindin" />
    <nav>
        <Link texto="Curso" redirect="/curso" />
        <Link texto="Blog" redirect="/curso" />
        <Link texto="Contato" redirect="/contato" />
    </nav>
    </header>
    )
}

export default Header;