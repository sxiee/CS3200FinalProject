import ordersService from "./orders-service";
const {useParams, useHistory} =window.ReactRouterDOM;
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const OrderEditor =() => {
    const [order, setOrder]=useState({})
    const {orderId}=useParams()
    const history=useHistory()

    useEffect(() => {
        if(orderId !== "new") {
            findOrderById(orderId)
        }
    }, []);

    const createOrder = (order) =>
        ordersService.createOrder(order)
            .then(() => history.goBack())

    const updateOrder = (id, newOrder) =>
        ordersService.updateOrder(orderId, newOrder)
            .then(() => history.goBack())

    const findOrderById = (id) => {
        ordersService.findOrderById(id).then((data) => {
            setOrder(data)
        })
    }

    const deleteOrder = (id) =>
        ordersService.deleteOrder(id)
            .then(() => history.goBack())

    return (
        <div>

            <h2>Order Editor</h2> <br />

            <h5>Note: <br />
            Update - Don't change User ID and Product ID (Related to users and product table)
            <br />
            Create - Use User ID in User List screen and Product ID in Product List screen
            </h5>
            <br /><br />
            <talbe>
                <tr>
                <th>ID</th> <td> <input value={order.id}/> </td>
                </tr>

            <tr>
                <th>Transaction Number</th> <td> <input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, transactionnumber: e.target.value}))}
                value={order.transactionnumber}/></td>
            </tr>

            <tr>
                <th>User ID</th> <td><input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, userid: e.target.value}))}
                value={order.userid}/></td>
            </tr>

            <tr>
                <th>Product ID</th> <td><input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, productid: e.target.value}))}
                value={order.productid}/> </td>
            </tr>

            <tr>
                <th>Quantity</th> <td><input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, quantity: e.target.value}))}
                value={order.quantity}/></td>
            </tr>
            <tr>
                <th>Sale Price</th> <td><input
                onChange={(e) =>
                    setOrder(order =>
                        ({...order, saleprice: e.target.value}))}
                value={order.saleprice}/></td>
            </tr>

            </talbe>

            <br />
            <br />

            <button
                onClick={() => deleteOrder(order.id)}>
                Delete
            </button>
            &nbsp;
            <button
                onClick={() => createOrder(order)}>
                Create
            </button>

            &nbsp;<button
            onClick={() => updateOrder(order.id, order)}>
            Update
            </button>

            <br />
            <br />
            <Link to="/orders">Back to Order List</Link>&nbsp;&nbsp;
            <Link to={`/users/${order.userid}`}>Go to User</Link>&nbsp;&nbsp;
            <Link to={`/products/${order.productid}`}>Go to Product</Link>&nbsp;&nbsp;

            <br />
            <br />

        </div>

    )
}


export default OrderEditor;