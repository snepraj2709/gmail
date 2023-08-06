import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Send from "./pages/Send";
import MailDetails from "./pages/MailDetails";
import Important from "./pages/Important";
import Starred from "./pages/Starred";
import Trash from "./pages/Trash";
function App() {
  return (
    <div className="dark:bg-slate-900 text-left dark:text-white min-h-screen bg-slate-200 text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/send" element={<Send />} />
        <Route path="/mail/:mailId" element={<MailDetails />} />
        <Route path="/important" element={<Important />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
