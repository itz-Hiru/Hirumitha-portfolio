import { SOCIAL_LINKS } from "../../utils/data.util";

const SocialLinksCard = () => {
  return (
    <div className="w-full border border-gray-500 bg-gray-50 grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2 md:gap-5 lg:gap-10 py-3 md:py-4 px-1.5 md:px-4 rounded-xl">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <div
          key={index}
          className="flex gap-2 items-center bg-gray-100 px-5 py-2.5 rounded-md"
        >
          <socialLink.icon className="text-5xl text-gray-800" />
          <div className="flex flex-col items-start">
            <h3 className="text-base text-gray-900 font-semibold">
              {socialLink.name}
            </h3>
            <a
              href={socialLink.path}
              className="text-xs lg:text-sm text-gray-600 cursor-pointer hover:text-gray-900 hover:underline transition-all duration-300"
            >
              {socialLink.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinksCard;
