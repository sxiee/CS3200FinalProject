const {Link} = window.ReactRouterDOM;

const Home =() => {
    return (
        <div>
            <h2>&nbsp;&nbsp;Online Store</h2>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/users">
            View User List
        </Link>
            <br /> <br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/products">
            View Product List
        </Link>
            <br /> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/orders">
            View Order List
        </Link>
        </div>

    )
}


export default Home;