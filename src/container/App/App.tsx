import React from 'react'

type Props = {
    title: string
}

const Applist = () => {
    return (
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    )
}

const AppHeader = (props: Props) => {
    // console.log(props)
    return <h1>Hello4 {props.title}</h1>
}

const App = () => {
    return (
        <>
            <AppHeader title="yo App--js333" />
            <AppHeader title="yo React--jS" />
            <AppHeader title="yo React--jS" />

            <Applist />
        </>
    )
}

export default App

// import React from 'react'

// function Blabla() {
//     return (
//         <>
//             <div className="test222">
//                 <h1>Yo, Hello World</h1>
//                 <p>
//                     Lorem, 999 ipsum dolor sit amet consectetur adipisicing
//                     elit. Inventore ratione quod placeat architecto quam! Nobis
//                     minima illum voluptas quos culpa magnam! Ullam molestiae cum
//                     consectetur accusamus. Nulla dolores nisi quo!
//                 </p>
//             </div>
//             <div>
//                 <h1>Yo, Hello World</h1>
//                 <p>
//                     Lorem, 3999 ipsum dolor sit amet consectetur adipisicing
//                     elit. Inventore ratione quod placeat architecto quam! Nobis
//                     minima illum voluptas quos culpa magnam! Ullam molestiae cum
//                     consectetur accusamus. Nulla dolores nisi quo!
//                 </p>
//             </div>
//         </>
//     )
// }

// export default Blabla
