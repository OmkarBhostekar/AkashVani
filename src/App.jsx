import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />} />
        {/* <Route path="/room" element={<Room />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
