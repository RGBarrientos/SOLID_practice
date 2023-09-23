type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product[];
};

let orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    // ... más órdenes ...
];

// Código para procesar esta información:
// (Este código se vuelve bastante complejo y requiere varias estructuras y bucles para ser procesado)

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product[];
};

let orders: Order[] = [
    // ... tus órdenes ...
];

const allProducts = orders.flatMap((order) => order.products);

const calculateOrderTotal = (order: Order) => order.products.reduce((total, product) => total + product.price, 0);

const getOrdersByCategory = (category: string) => orders.filter((order) => order.products.some((product) => product.category === category));

const findMostExpensiveProduct = () => allProducts.reduce((maxProduct, product) => (product.price > maxProduct.price ? product : maxProduct), allProducts[0]);






/*type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

type Order = {
    date: Date;
    products: Product[];
};

let orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
            { id: 2, name: 'Smartphone', category: 'Electronics', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', category: 'Books', price: 20 },
            { id: 4, name: 'Book: Design Patterns', category: 'Books', price: 35 }
        ]
    },
    // ... más órdenes ...
];*/