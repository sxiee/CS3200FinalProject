const ORDERS_URL="http://localhost:8080/api/orders";

const findAllOrders = () => {
    return fetch(ORDERS_URL)
        .then(response => response.json())
}

const findOrderById= (uid) => {
    return fetch(`${ORDERS_URL}/${uid}`).then(response => response.json())
}

const findUserOrders= (uid) => {
    return fetch(`${ORDERS_URL}/user/${uid}`).then(response => response.json())
}

const findProductOrders= (uid) => {
    return fetch(`${ORDERS_URL}/product/${uid}`).then(response => response.json())
}

export const deleteOrder= (uid) => {
    return fetch(`${ORDERS_URL}/${uid}`,{method: "DELETE"})
}

export const createOrder = (order) =>
    fetch(ORDERS_URL, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateOrder = (id, order) =>
    fetch(`${ORDERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(order),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllOrders,
    findOrderById,
    deleteOrder,
    createOrder,
    updateOrder,
    findUserOrders,
    findProductOrders
}