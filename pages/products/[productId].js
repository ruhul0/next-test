
import {useRouter} from 'next/router'
import Link from 'next/link'


function ProductId({product}){
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    return (
        <>
            
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
            <h2>
                <Link href='/posts'>
                    <a>Posts</a>
                </Link>
            </h2>      
            <h2>
                <Link href='/products'>
                    <a>Products</a>
                </Link>
            </h2>
            
            <div>
                <h2>
                    {product.id} {product.title} {product.price}
                </h2>
                <p>{product.description}</p>
                <hr />
            </div>
        </>
    )
}

export default ProductId

export async function getStaticPaths(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()

    // const paths = data.map(post =>{
    //         return {
    //             params: {
    //                 postId: `${post.id}`
    //             }
    //         }
    //     }
    // )
    return {
        paths:[
            {
                params: {productId: '1'},
            },
            {
                params: {productId: '2'},
            },
            {
                params: {productId: '3'},
            },
        ],

        // paths,
        fallback: true,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
        )
    const data =  await response.json()

    if(!data.id){
        return {
            notFound: true
        }
    }
    return {
        props: {
            product: data,
        },
    }
}