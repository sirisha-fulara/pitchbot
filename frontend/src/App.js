
import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import PitchForm from "./components/PitchForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/pitchform" element={<PitchForm />} />
    </Routes>
  )
}

export default App;
