'use client'
import { Product } from "../../payload-types"
import { TQueryValidator } from "../../lib/validators/query-validators"
import { trpc } from "@/trpc/client"
import ProductWithRate from "../../components/product-with-rate"

interface ProductReelProps {
  href?: string
  query: TQueryValidator
}

const FALLBACK_LIMIT = 24

const Items = (props: ProductReelProps) => {
  const { query } = props

  const { data: queryResults, isLoading } = trpc.getInfiniteProducts.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const products = queryResults?.pages.flatMap(
    (page) => page.items
  )

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (isLoading) {
    map = new Array<null>(
      query.limit ?? FALLBACK_LIMIT
    ).fill(null)
  }
  
  return (
    <div className='w-full grid grid-cols-4 grid-rows-6 gap16px mt-5'>
      {map.map((product, i) => (
        <ProductWithRate product={product} index={i} />
      ))}
    </div>
  )
}
export default Items