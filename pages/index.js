import Link from 'next/link'
import {useRouter} from 'next/router'

function Home(){

    const router = useRouter()
    const handClick = () => {
        console.log("Placing Order")
        // router.push('/product')
        router.replace('/product')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h2>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </h2>
            <h2>
                <Link href='products'>
                    <a>Products</a>
                </Link>
            </h2>
            <h2>
                <Link href='/users'>
                    <a>Users</a>
                </Link>
            </h2>
            <p>
            <button onClick={handClick}>Place Order</button>
            </p>
        </div>
    )
}

export default Home