import { FC } from "react"
import styles from "./DarkLayout.module.css"

type BoxProps = {
    children: React.ReactNode;
  };

export const DarkLayout: FC<BoxProps> = ({ children }: BoxProps) => {

    return(

        <div className={styles.dark}>
            <h3>Dark - layout</h3>
            <div>
                {children}
            </div>

        </div>

    )
}