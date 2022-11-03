import Link from 'next/link'
import {useRouter} from 'next/router'
import { FC } from 'react';
import styles from '../styles/Link.module.css'

type BoxProps = {
    text: string;
    href: string;
  };

export const ActiveLink: FC<BoxProps> = ({text, href}: BoxProps) => {
    const { asPath } = useRouter();
    return(
        <Link className={asPath === href ? styles["links-props"] : undefined} href={href}>{text}</Link>
    )
}