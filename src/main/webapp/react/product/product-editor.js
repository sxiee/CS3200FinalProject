import productsService from "./products-service";
const {useParams, useHistory} =window.ReactRouterDOM;
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const ProductEditor =() => {
    const [product, setProduct]=useState({})
    const {productId}=useParams()
    const history=useHistory()

    useEffect(() => {
        if(productId !== "new") {
            findProductById(productId)
        }
    }, []);

    const createProduct = (product) =>
        productsService.createProduct(product)
            .then(() => history.goBack())

    const updateProduct = (id, newProduct) =>
        productsService.updateProduct(productId, newProduct)
            .then(() => history.goBack())

    const findProductById = (id) => {
        productsService.findProductById(id).then((data) => {
            setProduct(data)
        })
    }

    const deleteProduct = (id) =>
        productsService.deleteProduct(id)
            .then(() => history.goBack())

    return (
        <div>

            <h2>Product Editor</h2> <br />

            <h5>Note: <br />
                Create and Update:
                <br />For Size - only use the value in sizetype table
 
                <br />
                Delete - You can only delete a product without any order associated with it
                <br />
            </h5>
            <br /><br />

            <talbe>
                <tr>
                    <th>ID</th> <td> <input value={product.id}/> </td>
                </tr>

                <tr>
                    <th>Name</th> <td> <input onChange={(e) =>
                    setProduct(product =>
                        ({...product, name: e.target.value}))}
                    value={product.name}/> </td>
                </tr>

                <tr>
                    <th>Description</th> <td> <input
                    onChange={(e) =>
                        setProduct(product =>
                            ({...product, description: e.target.value}))}
                    value={product.description}/>  </td>
                </tr>


                <tr>
                    <th>Type</th> <td> <input
                    onChange={(e) =>
                        setProduct(product =>
                            ({...product, type: e.target.value}))}
                    value={product.type}/>  </td>
                </tr>

                <tr>
                    <th>Size</th> <td> <input
                    onChange={(e) =>
                        setProduct(product =>
                            ({...product, size: e.target.value}))}
                    value={product.size}/> </td>
                </tr>

                <tr>
                    <th>Price</th> <td> <input
                    onChange={(e) =>
                        setProduct(product =>
                            ({...product, price: e.target.value}))}
                    value={product.price}/> </td>
                </tr>

            </talbe>

            <br />
            <br />
            <button
                onClick={() => deleteProduct(product.id)}>
                Delete
            </button>
&nbsp;
            <button
                onClick={() => createProduct(product)}>
                Create
            </button>

            &nbsp;<button
            onClick={() => updateProduct(product.id, product)}>
            Update
            </button>
            <br />
            <br />
            <Link to="/products">Back to Product List</Link>&nbsp;&nbsp;
            <Link to={`/orders/product/${product.id}`}>Go To Orders</Link>




        </div>

    )
}


export default ProductEditor;