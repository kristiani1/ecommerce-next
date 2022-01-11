import { FC } from "react"
import style from "./ProductSlider.module.css"

const ProductSlider: FC = ({children}) => {

    return (
        <div className={style.root}>
            <div className="h-full transition-opacity">
                {children}
            </div>
        </div>
    )
}

export default ProductSlider