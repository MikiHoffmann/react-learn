import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PageCard from "./pages/PageCard";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUps";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageCard" element={<PageCard />} />
        <Route path="/AllMeetUps" element={<AllMeetUpsPage />} />
        <Route path="/NewMeetUps" element={<NewMeetUpsPage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
