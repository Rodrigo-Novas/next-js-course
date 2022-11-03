import { FC } from "react"
import Head from 'next/head'
import styles from "./MainLayout.module.css"
import { Navbar } from '../Navbar'


type BoxProps = {
  children: React.ReactNode;
  title: string;
};

export const MainLayout: FC<BoxProps> = ({children, title}: BoxProps) =>{

    return(
        <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar></Navbar>
  
        <main className={styles.main}>
            {children}

        </main>
      </div>
    )
}