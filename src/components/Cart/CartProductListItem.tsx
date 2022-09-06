import { Product } from 'components/Products/productsArray'
import React from 'react'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.name}: {productCount}
        </div>
    )
}

export default CartProductListItem
