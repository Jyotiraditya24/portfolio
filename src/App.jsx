import "./App.css";
import PreLoader from "./components/PreLoader";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
      <PreLoader />
      <div className="">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
