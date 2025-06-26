import { SOCIAL_MEDIA } from "../../utils/data.util";
import ABOUT_IMAGE from "../../assets/about-image.png";

const PersonalInfo = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-5">
      <div className="w-full xl:w-1/2 flex">
        <img
          src={ABOUT_IMAGE}
          alt="about image"
          className="w-full h-full xl:h-108 object-cover xl:object-contain rounded-xl filter grayscale"
        />
      </div>
      <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">
          Personal Info
        </h2>
        <p className="text-sm text-gray-700 mb-7 text-center lg:text-left">
          With 1 year of professional experience as a web developer, I have
          acquired the skills and knowledge necessary to contribute effectively
          to the success of your project. I take pride in every stage of the
          design and development process — from initial discussions and planning
          to collaboration and final execution.
        </p>

        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3 px-4 py-6 items-start bg-gray-300 rounded-md">
            <h3 className="text-gray-700 text-sm">Email</h3>
            <p className="text-xs font-medium text-gray-800">
              hirumithakuladewanew@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-3 px-4 py-6 items-start bg-gray-300 rounded-md">
            <h3 className="text-gray-700 text-sm">Phone</h3>
            <p className="text-xs font-medium text-gray-800">+94 72 550 8919</p>
          </div>
          <div className="flex flex-col gap-3 px-4 py-6 items-start bg-gray-300 rounded-md">
            <h3 className="text-gray-700 text-sm">Address</h3>
            <p className="text-xs font-medium text-gray-800">
              216/6, Kelaniya, Gampaha, Western Province, Sri Lanka.
            </p>
          </div>
          <div className="flex flex-col gap-3 px-4 py-6 items-start bg-gray-300 rounded-md">
            <h3 className="text-gray-700 text-sm">Follow</h3>
            <div className="flex gap-5">
              {SOCIAL_MEDIA.map((socialMedia, index) => (
                <a
                  key={index}
                  href={socialMedia.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <socialMedia.icon className="text-gray-700 hover:text-gray-950 text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
