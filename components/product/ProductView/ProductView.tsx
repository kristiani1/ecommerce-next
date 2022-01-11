
import cn from 'classnames'
import { FC } from 'react'
import style from './ProductView.module.css'
import { Container } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider } from "@components/product"

interface Props {
    product: Product
}

const ProductView: FC<Props> = ({ product }) => {

    return (
        <Container>
            <div className={cn(style.root, 'fit')}>
                <div className={cn(style.productDisplay, 'fit')}>
                    <div className={style.nameBox}>
                        <h1 className={style.name}>
                            {product.name}
                        </h1>
                        <div className={style.price}>
                            {product.price.value}
                            {` `}
                            {product.price.currencyCode}
                        </div>
                    </div>
                    <ProductSlider>
                        { product.images.map(image =>
                            <div key={image.url} className={style.imageContainer}>
                                <Image
                                    className={style.img}
                                    src={image.url}
                                    alt={image.alt}
                                    width={1050}
                                    height={1050}
                                    quality="85"
                                />
                            </div>
                        )}
                    </ProductSlider>
                </div>
                    <div className={style.sidebar}>
                        <section>
                            <div className="pb-4">
                                <h2 className="uppercase font-medium">Color</h2>
                                <div className="flex flex-row py-4">
                                    Variant Options Here!
                                </div>
                            </div>
                            <div className="pb-14 break-words w-full max-w-xl text-lg">
                                { product.description }
                            </div>
                        </section>
                        <div>
                            <button
                                onClick={() => {}}
                                aria-label="Add to Cart"
                                className={style.button}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
        </Container>
    )
}

export default ProductView