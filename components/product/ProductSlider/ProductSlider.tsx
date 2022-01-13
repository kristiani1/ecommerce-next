import React, { FC, Children, isValidElement, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"
import style from "./ProductSlider.module.css"



const ProductSlider: FC = ({children}) => {

    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        loop: true,
    })

    const onPrev = React.useCallback(() => slider.current?.prev(), [slider])
    const onNext = React.useCallback(() => slider.current?.next(), [slider])

    return (
        <div className={style.root}>
            <div
                ref={sliderRef as unknown as React.RefObject<HTMLDivElement>}
                className="keen-slider h-full transition-opacity"
            >
                <button
                    onClick={onNext}
                    className={cn(style.leftControl, style.control)}
                />
                <button
                    onClick={onPrev}
                    className={cn(style.rightControl, style.control)}
                />
                { Children.map(children, child => {
                    if (isValidElement(child)) {
                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${
                                child.props.className ? `${child.props.className}` : ""
                                } keen-slider__slide`
                            }  
                        }
                    }
                    return child
                })}
            </div>
        </div>
    )
}

export default ProductSlider