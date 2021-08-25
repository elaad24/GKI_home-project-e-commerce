import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router";

//components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import PageNotFound404 from "./components/PageNotFound404";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        {/* need  to conect items to redux->database to take the about of product in shoppingcart   */}
        <NavBar items={0} />
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

          <Redirect to="/PageNotFound404" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
