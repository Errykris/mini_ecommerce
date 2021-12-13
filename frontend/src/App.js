import { BrowserRouter as Router, Route} from "react-router-dom";
import ProductList from "./admin/ProductList";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;