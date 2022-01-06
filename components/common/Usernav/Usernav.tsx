import { FC } from "react"
import style from "./Usernav.module.css"
import Link from "next/link"
import { Bag as Cart, Heart } from "@components/icons"

const Usernav: FC = () => {

    return (
        <nav>
            <ul className={style.list}>
                <li className={style.item}>
                    <Cart/>
                </li>
                <li className={style.item}>
                <Link href="/">
                    <a>
                        <Heart/>
                    </a>
                </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Usernav