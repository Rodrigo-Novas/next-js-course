import styles from '../../styles/Home.module.css'
import { Title } from '../../components/Title'
import { MainLayout } from '../../components/layouts/MainLayout'
import { ActiveLink } from '../../components/ActiveLink'

export default function pricing (){

    return(
        <MainLayout title={"Pricing - Rodrigo"} >
          <Title text={"Pricing"} ></Title>
          <h1 className={styles.title}>
              Ir al <ActiveLink text="Home" href="/"></ActiveLink>
          </h1>
        </MainLayout>
    )

}