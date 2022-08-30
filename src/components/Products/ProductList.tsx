import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type Props = { addProductToCart: (count: number, price: number) => void }

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Product List99
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductList
