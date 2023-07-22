import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../components/nav/NavBar"
import Electronics from "../pages/Electronics";
import Contact from "../pages/Contact";
import NotFound from "../error/NotFound";
import Jewelery from "../pages/Jewelery";
import MensCloting from "../pages/MensCloting";
import WowensCloting from "../pages/WowensCloting";


const ProductRouter = () => {
    return (
        <div>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />


                <Route path="/electronics" element={<Electronics />} />

                <Route path="/jewelery" element={<Jewelery />} />

                <Route path="/menClotings" element={<MensCloting />} />

                <Route path="/womenClotings" element={<WowensCloting />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default ProductRouter;
