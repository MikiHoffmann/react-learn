import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import CardsPage from "./pages/CardsPage";
import AllBridgesPage from "./pages/AllBridges";
import NewBridgesPage from "./pages/NewBridges";
import MyBridgesPage from "./pages/MyBridges";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<CardsPage />} />
        <Route path="/AllBridges" element={<AllBridgesPage />} />
        <Route path="/NewBridges" element={<NewBridgesPage />} />
        <Route path="/MyBridges" element={<MyBridgesPage />} />
      </Routes>
    </div>
  );
}

export default App;
