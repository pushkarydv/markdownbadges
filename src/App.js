import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Broadcast from "./components/Broadcast";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="bg-slate-100 text-slate-900 karla">
        <Broadcast />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
