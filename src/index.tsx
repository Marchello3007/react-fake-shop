import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = <h1>Hello, Hello World</h1>

function Blabla() {
    return(
        <div>
            {h1}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione quod placeat architecto quam! Nobis minima illum voluptas quos culpa magnam! Ullam molestiae cum consectetur accusamus. Nulla dolores nisi quo!</p>
        </div>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(h1);
root.render(<Blabla />);
