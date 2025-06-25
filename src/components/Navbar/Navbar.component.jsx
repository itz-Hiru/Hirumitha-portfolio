import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import LOGO from "../../assets/logo.png";
import { NAV_LINKS } from "../../utils/data.util";
import { IoClose } from "react-icons/io5";
import { TiLocationArrowOutline } from "react-icons/ti";

const Navbar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // When scrolled set isScrolled == true
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // In mobile navigation view handle outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-5 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-xs text-black shadow-black/10 py-3 md:py-5"
          : "bg-transparent py-3 md:py-6"
      }`}
    >
      {/* Portfolio Logo */}
      <a href="/" aria-label="Home" className="flex items-center gap-3">
        <img src={LOGO} alt="logo" className="w-24 h-auto" />
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8">
        {NAV_LINKS.map(({ path, name }) => (
          <a
            key={path}
            href={path}
            className="text-sm group flex flex-col gap-0.5 text-gray-700 hover:text-black transition-all duration-300"
          >
            {name}
            <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-black" />
          </a>
        ))}
      </div>

      {/* Desktop Contact Button */}
      <a
        href="#contact"
        className="hidden md:flex items-center gap-1 px-3 py-1.5 text-sm border rounded-md border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
      >
        <TiLocationArrowOutline className="text-[18px]" />
        Let's Talk
      </a>

      {/* Side Menu Open Button */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex md:hidden items-center"
        onClick={() => setIsMenuOpen(true)}
      >
        <RxHamburgerMenu className="text-2xl text-gray-700 hover:text-black" />
      </button>

      {/* Mobile Side Menu */}
      <aside
        className={`fixed top-0 left-0 h-screen w-2/3 max-w-xs bg-white flex flex-col items-center justify-center gap-6 font-medium text-gray-700 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close side menu button */}
        <button
          type="button"
          aria-label="Close menu"
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Mobile Navigation Links */}
        {NAV_LINKS.map(({ path, name }) => (
          <a
            key={path}
            href={path}
            className="hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            {name}
          </a>
        ))}

        {/* Mobile contact button */}
        <a
          href="#contact"
          className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded-md border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <TiLocationArrowOutline className="text-[18px]" />
          Let's Talk
        </a>
      </aside>
    </nav>
  );
};

export default Navbar;
