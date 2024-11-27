import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
