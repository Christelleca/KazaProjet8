import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Annonce from "./pages/AnnoncePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Annonce/:id" element={<Annonce />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
