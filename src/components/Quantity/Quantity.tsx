import { Button, TextField } from '@mui/material'
import React from 'react'

type Props = {
    onDecrementClick: () => void
    onIncrementClick: () => void
    count: number
}

const Quantity = ({ onDecrementClick, onIncrementClick, count }: Props) => {
    return (
        <div>
            <div className="product-quantity">
                <Button
                    variant="contained"
                    onClick={onDecrementClick}
                    disabled={count <= 1}
                >
                    -
                </Button>
                <TextField
                    size="small"
                    value={count}
                    variant="outlined"
                    className="text-field"
                />
                <Button
                    variant="contained"
                    onClick={onIncrementClick}
                    disabled={count >= 10}
                >
                    +
                </Button>
            </div>
        </div>
    )
}

export default Quantity
