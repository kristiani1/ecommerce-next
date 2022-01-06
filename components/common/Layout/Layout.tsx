import { FC } from "react"
import style from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"

const Layout: FC = ({children}) => {
    return (
        <div className={style.root}>
            <Navbar/>
            <Sidebar>
                <CartSidebar />
            </Sidebar>
            <main className="fit">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout