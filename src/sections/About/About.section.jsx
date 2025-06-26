import { useState } from "react";
import { ABOUT_TABS } from "../../utils/data.util";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");

  const ActiveComponent = ABOUT_TABS.find(
    (aboutTab) => aboutTab.label === activeTab
  ).content;
  return (
    <section
      id="about"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center lg:mt-10 pt-14 md:pt-18"
    >
      <p className="px-3 py-0.5 border border-gray-900 rounded-full text-sm text-gray-700 bg-slate-100 mb-3">
        About me
      </p>
      <h2 className="text-3xl text-center font-semibold mb-4">
        Explore The Creativity & More
      </h2>
      <p className="text-center text-xs md:text-[16px] text-gray-700 mb-9 max-w-4xl leading-5 md:leading-6">
        Welcome to my digital space! I am{" "}
        <span className="text-gray-950 font-semibold">Hirumitha Kuladewa</span>, a Full Stack
        Developer and UI/UX Designer with a deep passion for building seamless
        user experiences and scalable web applications. I'm always open to new
        opportunities, collaborations, and conversations. Whether you have a
        project in mind, feel free to share. Let's create something
        extraordinary.
      </p>
      <div className="flex bg-slate-200/50 px-1 py-1 rounded-md gap-1 mb-12">
        {ABOUT_TABS.map((aboutTab, index) => (
          <button
            key={index}
            type="button"
            className={`px-4 py-2 rounded-md font-semibold text-xs md:text-sm hover:bg-slate-900 hover:text-white transition-colors duration-300 ${
              activeTab === aboutTab.label
                ? "bg-slate-900 text-white"
                : "bg-transparent text-slate-700"
            }`}
            onClick={() => setActiveTab(aboutTab.label)}
          >
            {aboutTab.label}
          </button>
        ))}
      </div>
      <div className="bg-zinc-100 w-full p-3 md:p-10 rounded-md">
        <ActiveComponent />
      </div>
    </section>
  );
};

export default About;
