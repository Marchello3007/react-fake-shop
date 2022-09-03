import React from 'react'
import ReactDOM from 'react-dom/client'
import Blabla from 'container/App/App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Blabla />
    </BrowserRouter>
)
