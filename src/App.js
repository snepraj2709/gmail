import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Send from "./pages/Send";
import MailDetails from "./pages/MailDetails";
function App() {
  return (
    <div className="dark:bg-slate-900 text-left dark:text-white min-h-screen bg-slate-200 text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/send" element={<Send />} />
        <Route path="/mail/:mailId" element={<MailDetails />} />
      </Routes>
    </div>
  );
}

export default App;
