import Link from "next/link";
import style from "../styles/Style.module.css"

const Navbar = () => {

    return ( 
        <nav>
            <Link className={style.link} href={'/login'}> Login </Link> ||
            <Link className={style.link} href={'/about'}> About </Link> ||
            <Link className={style.link} href={'/contact'}> Contact </Link>
        </nav>
     );
}
 
export default Navbar;