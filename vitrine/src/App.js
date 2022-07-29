import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vitrine from "./Components/Vitrine";
import Produto from "./Components/Produto";
import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Vitrine />} />
        <Route path="/:id" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
