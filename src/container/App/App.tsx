import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            [id]: prevState[id] + count,
        }))

        console.log(id)
        console.log(count)
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(1, 2)}>Add To Cart</button>
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
