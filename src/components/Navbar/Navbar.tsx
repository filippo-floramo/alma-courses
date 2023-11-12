import styles from "./navbar.module.scss"
import { A } from "@solidjs/router"



export default function Navbar() {




   return (
      <div class={styles.navbar_container}>
         <A href="/">U \\ Home</A>
         <A href="/courses" end={true}> Corsi</A>
      </div>
   )
}