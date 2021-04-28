import Home from "./home";
import UserList from "./react/user/user-list";
import UserEditor from "./react/user/user-editor";
import ProductList from "./react/product/product-list";
import ProductEditor from "./react/product/product-editor";
import OrderList from "./react/order/order-list";
import OrderEditor from "./react/order/order-editor";
import UserOrderList from "./react/order/userorder-list";
import ProductOrderList from "./react/order/productorder-list";


const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route  path={"/"} exact={"true"}>
                    <Home />
                </Route>

                <Route  path={"/users"} exact={"true"}>
                    <UserList />
                </Route>

                <Route  path={"/users/:userId"} exact={"true"}>
                    <UserEditor />
                </Route>

                <Route  path={"/products"} exact={"true"}>
                    <ProductList />
                </Route>

                <Route  path={"/products/:productId"} exact={"true"}>
                    <ProductEditor />
                </Route>

                <Route  path={"/orders"} exact={"true"}>
                    <OrderList />
                </Route>

                <Route  path={"/orders/:orderId"} exact={"true"}>
                    <OrderEditor />
                </Route>

                <Route  path={"/orders/user/:userId"} exact={"true"}>
                    <UserOrderList />
                </Route>

                <Route  path={"/orders/product/:productId"} exact={"true"}>
                    <ProductOrderList />
                </Route>

            </HashRouter>

        </div>

    );
}

export default App;
