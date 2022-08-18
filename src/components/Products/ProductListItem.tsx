import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
// import './ProductListItem.css'
import './ProductListItem.scss'

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
                <h3 className="product-title">{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features red">Type: {type}</div>
                <div className="product-features green">{capacity} Gb</div>
                <div className="product-price">$ {price}</div>
            </CardContent>

            <CardActions className="btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
