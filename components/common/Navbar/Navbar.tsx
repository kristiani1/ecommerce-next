import { FC } from "react"
import { Container } from "@components/ui"
import { Usernav } from "@components/common"
import Link from "next/link"
import style from "./Navbar.module.css"

const Navbar: FC = () => {
    return (
    <Container>
        <div className={style.root}>
            <div className="flex flex-1 item- center">
                <Link href="/">
                    <a className={style.logo}>
                        NEXT_STORE
                    </a>
                </Link>
                <nav className="ml-6 space-x-6">
                    <Link href="/">
                        <a className={style.link}>All</a>
                    </Link>
                    <Link href="/">
                        <a className={style.link}>Fruits</a>
                    </Link>
                    <Link href="/">
                        <a className={style.link}>Candies</a>
                    </Link>
                </nav>
                <div className="flex flex-1 justify-end space-x-8">
                    <Usernav />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Navbar