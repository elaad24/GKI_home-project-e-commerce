import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setStoreData } from "./redux/slices/shoppingCartSlice";
import { storeFromLocalStorage } from "./function";

//components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import PageNotFound404 from "./components/PageNotFound404";
import ProductPage from "./components/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import { useEffect } from "react";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer";

function App() {
  const shoppingCart = useSelector((state) => state.shoppingCart.products);
  const dispatch = useDispatch();

  /* useEffect(() => {
    const data = storeFromLocalStorage();
    setInterval(dispatch(setStoreData(...data)), 3000);
  }, []); */

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        {/* need  to conect items to redux->database to take the about of product in shoppingcart   */}
        <NavBar items={shoppingCart.length} />
      </header>

      <main className="container-fluid flex-fill">
        <Switch>
          <Route path="/PageNotFound404" component={PageNotFound404} />

          <Route path="/home" component={Home} />

          <Route path="/ProductsPage" component={ProductsPage} />

          <Route
            path="/ProductsPage?category=clothing"
            component={ProductsPage}
          />

          <Route
            path="/ProductsPage?category=electronics"
            component={ProductsPage}
          />

          <Route
            path="/ProductsPage?category=contactus"
            component={ProductsPage}
          />

          <Route
            path="/ProductsPage?category=wishlist"
            component={ProductsPage}
          />

          <Route
            path="/ProductsPage?category=shoppingcart"
            component={ProductsPage}
          />

          <Route path="/ProductPage" component={ProductPage} />

          <Route path="/shoppingCart" component={ShoppingCart} />

          <Route path="/contactus" component={ContactUs} />

          <Redirect to="/PageNotFound404" />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
