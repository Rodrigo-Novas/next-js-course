import { ActiveLink } from '../components/ActiveLink'
import { Title } from '../components/Title'
import styles from '../styles/Home.module.css'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() { // es obligatorio que tenga el export default, la extension es js en comparacion a jsx
  return (
        <MainLayout title={"Home - Rodrigo"} >
          <Title text={"Home Page"} ></Title>
          <h1 className={styles.title}>
              Ir al <ActiveLink text="About" href="/about"></ActiveLink>
          </h1>
        </MainLayout>
  )
}
