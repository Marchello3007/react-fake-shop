import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import { Grid } from '@mui/material'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
    plusOne: (id: number, count: number) => void
    minusOne: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    plusOne,
    minusOne,
}: Props) => {
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    plusOne={plusOne}
                    minusOne={minusOne}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
