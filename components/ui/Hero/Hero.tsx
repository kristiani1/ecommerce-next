import { FC } from "react"
import style from "./Hero.module.css"
import Link from "next/link"

interface Props {
    headline: string
    description: string
}

const Hero: FC<Props> = ({headline, description}) => {
    return (
        <div className="bg-black">
            <div className={style.root}>
                <h2 className={style.headline}>
                    {headline}
                </h2>
                <div>
                    <p className={style.description}>
                        {description}
                    </p>
                    <Link href="/">
                        <a className={style.link}>
                            read it
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero