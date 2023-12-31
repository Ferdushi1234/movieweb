import styles from "../styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <h1 style={{fontSize:"35px",color:"white"}}>
                    GSflix
                </h1>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;