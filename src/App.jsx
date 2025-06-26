import { Toaster } from "react-hot-toast";
import HERO_IMAGE from "./assets/home-globe.png";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./sections/Home/Home.section";
import About from "./sections/About/About.section";

const App = () => {
  return (
    <div>
      <Navbar />
      <img
        src={HERO_IMAGE}
        alt="desktop hero background image"
        className="absolute top-10 right-0 h-[90vh] filter invert-75 object-cover z-0 hidden md:block"
      />
      <div className="absolute inset-0 h-[100vh] bg-white/60 z-5 hidden md:block"></div>
      <img
        src={HERO_IMAGE}
        alt="mobile hero background image"
        className="block absolute top-10 right-0 w-full h-auto filter invert-75 object-cover z-0 md:hidden"
      />
      <div className="relative z-10 px-5 md:px-16 lg:px-24 xl:px-32 mt-14 md:mt-24">
        <Home />
        <About />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
