import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
// import './ProductListItem.css'
import './ProductListItem.scss'
import productsArray from './productsArray'

export type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}: ProductProps) => {
    const [count, setCount] = useState<number>(15)
    const [color, setColor] = useState<string>('green')
    // const [text, setText] = useState<string>('bla-bla')

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)
    const toggleChangeColor = () =>
        setColor((prevState: string) => (prevState === 'red' ? 'green' : 'red'))

    return (
        <Card>
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h3 className={`product-title ${color}`}>{name}</h3>
                <div className="product-description">{description}</div>
                <div className="product-features red">Type: {type}</div>
                <div className="product-features green">{capacity} Gb</div>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <Button variant="contained" onClick={onDecrementClick}>
                        -
                    </Button>
                    <TextField
                        size="small"
                        value={count}
                        variant="outlined"
                        className="text-field"
                    />
                    <Button variant="contained" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <p>Color: {color}</p>
                <button onClick={toggleChangeColor}>Change Color</button>
            </CardContent>

            <CardActions className="btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
