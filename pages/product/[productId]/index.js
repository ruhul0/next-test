import {useRouter} from 'next/router'

function ProductDetail(){
    const router = useRouter()
    const productId =  router.query.productId
    return <h1>Detail About Product Details of {productId}</h1>
}

export default ProductDetail