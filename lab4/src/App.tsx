import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const Products = () => (
  <div>
    <h1>Products Page</h1>
    <ul>
      <li>
        <Link to="/products/electronics">Electronics</Link>
      </li>
      <li>
        <Link to="/products/books">Books</Link>
      </li>
      <li>
        <Link to="/products/clothing">Clothing</Link>
      </li>
    </ul>
  </div>
);

const ProductCategory = () => {
  const { category } = useParams();
  return (
    <div>
      <h1>{category} Category</h1>
      <ul>
        <li>
          <Link to={`/products/${category}/1`}>Item 1</Link>
        </li>
        <li>
          <Link to={`/products/${category}/2`}>Item 2</Link>
        </li>
        <li>
          <Link to={`/products/${category}/3`}>Item 3</Link>
        </li>
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  const { category, id } = useParams();
  return (
    <h1>
      {category} Product {id} Details
    </h1>
  );
};

export default App;
