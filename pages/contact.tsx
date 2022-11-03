import { ActiveLink } from '../components/ActiveLink'
import styles from '../styles/Home.module.css'
import { Title } from '../components/Title'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

export default function Contact() { // es obligatorio que tenga el export default, la extension es js en comparacion a jsx
  return (
        <>
            <Title text={"Contact Page"} ></Title>
            <h1 className={styles.title}>
                Ir al <ActiveLink text="Home" href="/"></ActiveLink>
            </h1>
        </>
  )
}

Contact.getLayout = function getLayout(page: ReactNode){

    return(
        <MainLayout title={"Contact - Rodrigo"} >
        <DarkLayout>
            {page}
        </DarkLayout>
        </MainLayout>
    )
}