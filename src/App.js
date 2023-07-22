import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Footer from "../src/components/footer/Footer";
import ProductRouter from "../src/router/ProductRouter"

function App() {
  return (
    <div className="App">
    <ProductRouter />
    <Footer />
    </div>
  );
}

export default App;
