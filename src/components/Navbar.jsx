import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../data/data";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              GreetArt
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <div className="relative group">
                <Link to="/categories">
                  <button className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                    Categories
                    {/* <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                  </button>
                </Link>
                {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href={`#${category.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      >
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
              <a
                href="#features"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-medium">
              Sign Up Free
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600"
              >
                Home
              </a>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Categories
                </p>
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.name.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center px-2 py-1 text-sm text-gray-700 hover:text-purple-600"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </a>
                ))}
              </div>
              <a
                href="#features"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600"
              >
                Pricing
              </a>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all font-medium">
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
