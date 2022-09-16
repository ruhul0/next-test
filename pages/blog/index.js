import Link from 'next/link'
function Blog(){
    return (
        <>
            <h1>Blog Page</h1>
            <h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </h2>
            
            <h2>
                <Link href='/posts'>
                    <a>Posts</a>
                </Link>
            </h2>
            
        </>
    )
}

export default Blog