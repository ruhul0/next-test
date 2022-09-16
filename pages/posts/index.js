import Link from 'next/link'

function PostList({posts}){
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
                posts.map(post=> {
                    return (
                        <div key={post.id}>
                            <h2>
                                <Link href={`posts/${post.id}`}>
                                        <a>{post.id} {post.title}</a>
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

export default PostList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data,
        }
    }
}