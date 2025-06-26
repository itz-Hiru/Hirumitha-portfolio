import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";
import { IoHandRight } from "react-icons/io5";
import { LuLoaderCircle } from "react-icons/lu";
import CV from "../../assets/Hirumitha.pdf";
import HERO_IMAGE from "../../assets/hero-image.png";
import SocialLinksCard from "../../components/Cards/SocialLinksCard.component";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const link = document.createElement("a");
      link.href = CV;
      link.download = "Hirumitha-CV.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("CV Downloaded Successfully.");
    } catch (error) {
      toast.error("Error while downloading CV");
      console.error("Error while downloading CV: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[100vh]"
    >
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <div className="max-w-3xs flex flex-col gap-2 items-center lg:items-start">
            <p className="text-[15px] text-gray-600">
              Currently Available For Freelance Worldwide.
            </p>
            <span className="block h-0.5 w-24 lg:w-full bg-gray-600" />
          </div>
          <h3 className="flex text-xl font-semibold items-center mt-2.5 text-slate-700">
            Hi,{" "}
            <IoHandRight className="mr-2 text-2xl text-slate-900 wave-hand" />{" "}
            I'm Hirumitha Kuladewa
          </h3>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            A Full Stack Developer and{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              UI/UX Designer
            </span>
          </h1>
          <p className="max-w-md text-sm text-slate-700 mt-3 font-medium mb-8">
            Full Stack Developers employ a range of tools and frameworks to
            deliver end-to-end solutions.
          </p>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isLoading}
            className="flex gap-3 items-center mb-16 group bg-gray-800 text-white px-5 py-2.5 rounded-md shadow-2xl shadow-black/60 hover:bg-black transition-colors duration-300 focus-within:bg-black"
          >
            {isLoading ? "Downloading..." : "Download CV"}
            {isLoading ? (
              <LuLoaderCircle className="text-[17px] animate-spin" />
            ) : (
              <FaArrowRight className="text-[17px] group-hover:translate-x-1 duration-300 transition-transform" />
            )}
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={HERO_IMAGE}
            alt="hero image"
            className="lg:h-[70vh] h-full w-auto object-cover"
          />
        </div>
      </div>
      <SocialLinksCard />
    </section>
  );
};

export default Home;
