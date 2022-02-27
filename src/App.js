import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Profile } from "./pages/profile";
import { DataProvider } from "./context/data";
import { Create } from "./pages/create";

function App() {
  return (
    <Router>
      <DataProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:name" element={<Profile />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
