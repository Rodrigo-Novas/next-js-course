import { FC } from 'react';
import styles from '../styles/Title.module.css'

type BoxProps = {
    text: string;
  };


export const Title: FC<BoxProps> = ({text}: BoxProps) =>{

    return(
        <h1 className={styles["title-container"]} >{text}</h1>
    )
}