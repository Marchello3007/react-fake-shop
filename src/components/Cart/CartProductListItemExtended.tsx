import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    productCount,
    product,
    removeProductFromCart,
}: Props) => {
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
