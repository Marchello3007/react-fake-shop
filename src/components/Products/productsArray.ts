export type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}


const productsArray:Product[] = [
    {
        id: 1,
        name: 'iPhne X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/images/111.jpg',
    },
    {
        id: 2,
        name: 'iPhne XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 128,
        price: 700,
        image: '/images/222.jpg',
    },
    {
        id: 3,
        name: 'iPhne 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: 512,
        price: 1000,
        image: '/images/333.jpg',
    },
    {
        id: 4,
        name: 'iPhne 8 plus',
        description: 'This is iPhone 8 plus',
        type: 'phone',
        capacity: 128,
        price: 1500,
        image: '/images/444.jpg',
    },
    {
        id: 5,
        name: 'iPhne 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: 64,
        price: 1000,
        image: '/images/555.jpg',
    },
    {
        id: 6,
        name: 'iPhne 11 Pro Max',
        description: 'This is iPhone 11 Pro Max',
        type: 'phone',
        capacity: 128,
        price: 2000,
        image: '/images/666.jpg',
    },
]

export default productsArray

export const getProductObject = (array:Product[]) => {
    return array.reduce((Object,product) => ({
        ...Object,
        [product.id]:product
    }),{})
}
