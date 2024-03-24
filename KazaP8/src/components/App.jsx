import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Annonce from "./annonce";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="annonce/:id" element={<Annonce />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
