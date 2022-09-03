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

const CartPage = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].name}:{' '}
                    {productsInCart[parseInt(productId)]} :{' '}
                    {productsObject[parseInt(productId)].price}
                </div>
            ))}
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
        </div>
    )
}

export default CartPage
