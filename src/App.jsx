import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen min-w-fit">
      <Navbar />
      <div className="pt-24 px-8 md:px-56 w-full"> {/* Adjusted padding-top */}
        <Hero />
        <Features />
        <Projects />
        <Work />
      </div>
      <Footer />
    </div>
  );
}
