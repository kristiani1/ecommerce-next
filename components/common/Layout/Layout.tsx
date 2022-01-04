import { FC } from "react"
import style from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"

const Layout: FC = ({children}) => {
    return (
        <div className={style.root}>
            <Navbar/>
            <main className="fit">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout