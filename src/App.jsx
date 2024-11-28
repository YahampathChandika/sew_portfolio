import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <div className="px-56">
        <Hero />
        <Features />
        <Projects />
      </div>
    </div>
  );
}
