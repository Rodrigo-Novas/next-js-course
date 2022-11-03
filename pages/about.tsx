import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { ActiveLink } from '../components/ActiveLink'
import styles from '../styles/Home.module.css'

export default function About() { // es obligatorio que tenga el export default, la extension es js en comparacion a jsx
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Rodrigo</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/*Podes añadir doble header es util cuando tengamos layouts*/}
      <Head> 
        <title>About2 - Rodrigo</title>
        <meta name="description" content="About2 Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>

      <h1>About page</h1>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Ir al <ActiveLink text="Home" href="/"></ActiveLink > {/* El Link tiene prefetch hace que la pagina se renderice una sola vez y no la recarga, util en produccion para la rapidez*/}
        </h1>
      </main>
    </div>
  )
}
