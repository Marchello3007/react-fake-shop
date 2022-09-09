import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    plusOne: (id: number, count: number) => void
    minusOne: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    productCount,
    product,
    removeProductFromCart,
    plusOne,
    minusOne,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={product.image}
                            alt=""
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>

                    <Quantity
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                        count={count}
                    />

                    <button onClick={() => minusOne(product.id, 1)}>
                        minusOne
                    </button>

                    <button onClick={() => plusOne(product.id, 1)}>
                        plusOne
                    </button>
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
