import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { categories } from "../data/data";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              GreetArt
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Create beautiful, personalized SVG greetings for every occasion.
              Transform your messages into stunning visual experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                hello@greetart.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 GreetArt. All rights reserved. Made with ❤️ for creators
            everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
