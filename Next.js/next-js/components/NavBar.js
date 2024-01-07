import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"
export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
    // <nav>
    <nav className={styles.nav}> 
        {/* <Link href="/" style={{color: router.pathname === "/" ? "red":"blue"}}> */}
        <Link href="/" className={`${styles.link} ${router.pathname ==='/' ? styles.active : ""}`}>
            Home
        </Link>
        <Link href="/about" className={[
        styles.link, 
        router.pathname ==='/about' ? styles.active : ""]
        .join(" ")}>
        About
        </Link>
        
        <Link href='/' legacyBehavior>
            <a className={`${styles.link} ${router.pathname ==='/' ? styles.active : ""}`}>Home</a>
        </Link>
        <Link href='/about' legacyBehavior>
            <a className={[
            styles.link, 
            router.pathname ==='/about' ? styles.active : ""]
            .join(" ")}>About</a>
        </Link>
        <style jsx>{`
        nav{
            background-color : tomato;
        }
        a{
            text-decoration: none;
        }
        }`}
        </style>
        </nav>
    );
}