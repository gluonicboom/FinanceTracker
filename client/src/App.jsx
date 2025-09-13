import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import ReadMore from "./components/readMore";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/readMore" element={<ReadMore />} />
      </Routes>
    </Router>
  );
}
