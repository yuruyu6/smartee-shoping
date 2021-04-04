import axios from "axios"

const getProducts = () => {
    axios.get('/products').then(products => {
        return products
    })
}

export default getProducts;