import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="bg-slate-900 text-center text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      Email
    </div>
  );
}

export default App;
