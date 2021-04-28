const USERS_URL="http://localhost:8080/api/users";

const findAllUsers = () => {
    return fetch(USERS_URL)
        .then(response => response.json())
}
const findUserById= (uid) => {
    return fetch(`${USERS_URL}/${uid}`).then(response => response.json())
}

export const deleteUser= (uid) => {
    return fetch(`${USERS_URL}/${uid}`,{method: "DELETE"})
}

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllUsers,
    findUserById,
    deleteUser,
    createUser,
    updateUser
}