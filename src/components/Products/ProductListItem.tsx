import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type PropsBlaBla = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: PropsBlaBla) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">{capacity} Gb</div>
                <div className="product-price">$ {price}</div>
            </CardContent>

            <CardActions>
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
