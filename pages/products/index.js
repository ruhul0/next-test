import Link from 'next/link'

function Products({products}){
    return (
        <>
            <h1>List of Posts</h1>
            <h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </h2>
            <h2>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </h2>
            {
                products.map(product=> {
                    return (
                        <div key={product.id}>
                            <h2>
                                <Link href={`products/${product.id}`}>
                                        <a>{product.id} {product.title} {product.price}</a>
                                </Link>
                            </h2>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Products

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return {
        props: {
            products: data,
        },
        revalidate: 10,
    }
}