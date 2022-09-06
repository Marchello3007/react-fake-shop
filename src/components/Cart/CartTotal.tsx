import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductObject,
    Product,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    return (
        <div>
            Total{' '}
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}
            $
        </div>
    )
}

export default CartTotal
