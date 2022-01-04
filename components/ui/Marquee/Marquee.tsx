import { ReactNode, FC} from "react"
import Ticker from "react-ticker"
import style from "./Marquee.module.css"
import cn from "classnames"

interface Props {
    children: ReactNode[]
    variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({children, variant = "primary"}) => {
    const rootClassName = cn(
        style.root,
        {
            [style.secondary]: variant === "secondary"
        }
    )

    return (
        <div className={rootClassName}>
            <Ticker offset={100}>
                { () => 
                    <div className={style.container}>
                        {children}
                    </div>           
                }
            </Ticker>

        </div>
    )
}

export default Marquee