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
    color: string
    disabled: boolean
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 1,
        color: 'green',
        // disabled: true,
        disabled: false,
    }

    // onDecrementClick = () => {
    //     this.setState((prevState: State) => ({
    //         count: prevState.count - 1,
    //     }))
    // }

    // onIncrementClick = () => {
    //     this.setState((prevState: State) => ({
    //         count: prevState.count + 1,
    //     }))
    // }

    // ///////////  green, red, black  /////////////
    changeColor = () => {
        if (this.state.color == 'green') {
            this.setState({ color: 'red' })
        } else if (this.state.color == 'red') {
            this.setState({ color: 'black' })
        } else {
            this.setState({ color: 'green' })
        }
        console.log(this.state.color)
    }
    // ///////////

    onDecrementClick = () => {
        if (this.state.count <= 0) {
            this.setState({ disabled: true })
        } else {
            this.setState((prevState: State) => ({
                count: prevState.count - 1,
            }))
        }
        console.log(this.state.count)
    }

    onIncrementClick = () => {
        if (this.state.count >= 10) {
            this.setState({ disabled: true })
        } else {
            this.setState((prevState: State) => ({
                count: prevState.count + 1,
            }))
        }
        console.log(this.state.count)
    }
    ///////////
    ///////////

    render() {
        const { image, name, description, type, capacity, price } = this.props
        return (
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h3 className="product-title">{name}</h3>
                    <div className="product-description">{description}</div>
                    <div className="product-features red">Type: {type}</div>
                    <div className="product-features green">{capacity} Gb</div>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            onClick={this.onDecrementClick}
                            disabled={this.state.disabled}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                            className="text-field"
                        />
                        <Button
                            variant="contained"
                            onClick={this.onIncrementClick}
                            disabled={this.state.disabled}
                        >
                            +
                        </Button>
                    </div>
                    <p>Color: {this.state.color}</p>
                    <button onClick={this.changeColor}>Change color</button>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
