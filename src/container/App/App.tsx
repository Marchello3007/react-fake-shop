import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit, omitBy } from 'lodash'

type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 1,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) =>
            omit(prevState, [id])
        )
    }

    const plusOne = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => {
            let prevProductsInCart = { ...prevState }
            prevProductsInCart[id]++
            return prevProductsInCart
        })
    }

    const minusOne = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => {
            let prevProductsInCart = { ...prevState }
            prevProductsInCart[id]--
            return prevProductsInCart
        })
    }

    console.log(productsInCart)

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => plusOne(1, 1)}>plusOne</button>
            <button onClick={() => minusOne(1, 1)}>minusOne</button> */}
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                plusOne={plusOne}
                minusOne={minusOne}
            />
        </>
    )
}

export default App
