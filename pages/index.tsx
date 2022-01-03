import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0,3).map(product => 
          <ProductCard 
            key={product.id}
            product={product}
          />
       )}
      </Grid>
      <Hero 
        headline="hi there"
        description="Tootsie roll jelly-o cupcake marshmallow muffin chocolate cake dessert. Muffin tart croissant lemon drops muffin tart. Gummi bears donut sweet shortbread topping chupa chups apple pie. Brownie cheesecake icing ice cream tootsie roll chocolate cake biscuit. Marshmallow sesame snaps cake dragée toffee macaroon. Shortbread gummi bears icing donut cotton candy tart cake powder tart. Jujubes bonbon bonbon pastry cake pie jujubes jelly beans lemon drops. Sugar plum cake bonbon soufflé gingerbread topping jelly beans chocolate cotton candy. Cake danish carrot cake sweet chupa chups cotton candy cake chupa chups candy canes."
      />
    </>
  )
}

Home.Layout = Layout