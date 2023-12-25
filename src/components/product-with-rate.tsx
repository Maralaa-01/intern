'use client'
import { trpc } from "@/trpc/client"
import { Badge, Product } from "../payload-types"

interface ProductProps {
  product: Product | null
  index: number
}

const ProductWithRate = ({ product, index }: ProductProps ) => {
  if (!product) return <></>

  const validUrls = product.images
    .map(({ image }) =>
      typeof image === 'string' ? image : image.url
    )
    .filter(Boolean) as string[]

  const arr = [1,2,3,4,5]
  const name = product.name

  const { data: badgeResult } = trpc.getBadges.useQuery(
    {
      name
    }
  )

  

  return (
    <div key={index} className=" border border-grey-100 flex flex-col gap8px sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3 3xl:p-4 h-[220px]">
      <div className="relative flex h-[134px] justify-center items-center">
        <img src={validUrls[0]} alt={product.name} className="object-contain max-h-full max-w-100%" />
      </div>
      <div className="flex flex-col gap8px">
        <div className="rating rating-xs">
          {arr.map((a) => (
            a == product.rate
              ? <input key={index + a} type="radio" name={`rating-${index}0`}  className="mask mask-star-2 bg-primary-500" checked readOnly/>
              : <input key={index + a} type="radio" name={`rating-${index}0`}  className="mask mask-star-2 bg-primary-500"/>
          ))}
        </div>
        <span className="body-small-400 h-6 overflow-hidden">{product.name}</span>
        <div className="inline-flex body-small-600 text-secondary-500">
          ${product.price}
        </div>
        {badgeResult?.map((i) => (
          i.badges
        ))}
      </div>
    </div>
  )
}
export default ProductWithRate