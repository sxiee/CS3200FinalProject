const PRODUCTS_URL="http://localhost:8080/api/products";

const findAllProducts = () => {
    return fetch(PRODUCTS_URL)
        .then(response => response.json())
}
const findProductById= (uid) => {
    return fetch(`${PRODUCTS_URL}/${uid}`).then(response => response.json())
}

export const deleteProduct= (uid) => {
    return fetch(`${PRODUCTS_URL}/${uid}`,{method: "DELETE"})
}

export const createProduct = (product) =>
    fetch(PRODUCTS_URL, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateProduct = (id, product) =>
    fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllProducts,
    findProductById,
    deleteProduct,
    createProduct,
    updateProduct
}