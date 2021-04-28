import productsService from "./products-service"
const {useState, useEffect} =React;
const {Link} = window.ReactRouterDOM;

const ProductList =() => {
const [products, setProducts]=useState([])
    useEffect(()=>{
        findAllProducts()
    },[])
    const findAllProducts = () => {
        productsService.findAllProducts().then((data) => {
            setProducts(data)
        })
    }

    return (
        <div>
            <h2>Product List</h2>
            <br />
            Click the ID to view and edit product information:
            <table>
                <tr>
                    <th>ID</th><th>Name</th><th>Description</th><th>Type</th>
                    <th>Size</th><th>Price</th>
                </tr>
            {
                products.map((product) => {
                    return (<tr>
                        <td>
                        <Link to={`/products/${product.id}`}>
                            {product.id}
                        </Link>
                        </td>
                        <td>{product.name}</td><td>{product.description}</td>
                        <td>{product.type}</td><td>{product.size}</td>
                        <td>{product.price}</td></tr>)
                })
            }
            </table>
            <br /><br />
            &nbsp;&nbsp;&nbsp;<Link to="/">Back to Home Page</Link>&nbsp;&nbsp;&nbsp; <Link to="/products/new">Add New Product</Link>
        </div>

    )
}

export default ProductList;