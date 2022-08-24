import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { Component } from 'react'
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

type State = {
    count: number
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 10,
    }
    //або:
    // constructor(props: ProductProps) {
    //     super(props)
    //     this.state = {
    //         count: 5,
    //     }
    // }

    render() {
        return (
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h3 className="product-title">{this.props.name}</h3>
                    <div className="product-description">
                        {this.props.description}
                    </div>
                    <div className="product-features red">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features green">
                        {this.props.capacity} Gb
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant="contained">-</Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                            className="text-field"
                        />
                        <Button variant="contained">+</Button>
                    </div>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
