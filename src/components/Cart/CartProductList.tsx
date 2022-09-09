import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductObject,
    Product,
} from 'components/Products/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    plusOne?: (id: number, count: number) => void
    minusOne?: (id: number, count: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    plusOne,
    minusOne,
}: Props) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    plusOne={plusOne}
                    minusOne={minusOne}
                />
            ))}
        </>
    )
}

export default CartProductList
