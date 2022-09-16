import User from '../components/user'

function Users( {users} ){
    return (
        <>
            <h1>User list</h1>
            {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users

export async function getStaticProps(){
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await reponse.json()
    return {
        props: {
            users: data,
        },
    }
}