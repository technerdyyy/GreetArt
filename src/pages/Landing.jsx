import React from "react";
import { Star, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  categories,
  features,
  stats,
  testimonials,
  pricingPlans,
} from "../data/data";

const LandingPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create Beautiful
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  SVG Greetings
                </span>
                in Seconds
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform ordinary moments into extraordinary memories with our
                stunning collection of customizable SVG templates. Perfect for
                birthdays, anniversaries, quotes, and special occasions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                  Start Creating Free
                </button>
                <Link to="/categories">
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all font-semibold text-lg">
                    View Templates
                  </button>
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  No design skills needed
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Instant download
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <svg
                  width="100%"
                  height="300"
                  viewBox="0 0 400 300"
                  className="rounded-lg"
                >
                  <rect width="400" height="300" fill="#ff6b6b" rx="20" />
                  <circle cx="200" cy="80" r="30" fill="#fff" opacity="0.3" />
                  <text
                    x="200"
                    y="140"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    Happy Birthday
                  </text>
                  <text
                    x="200"
                    y="180"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontFamily="Arial, sans-serif"
                  >
                    Sarah!
                  </text>
                  <text
                    x="200"
                    y="220"
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontFamily="Arial, sans-serif"
                  >
                    🎉 Have a wonderful day! 🎉
                  </text>
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm transform rotate-12">
                Customizable!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From heartfelt birthday wishes to inspiring quotes, find the
              perfect template for every occasion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {category.count} templates available
                  </p>
                  <div className="flex items-center justify-center text-purple-600 font-medium group-hover:text-purple-700">
                    Explore{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTIONS */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose GreetArt?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it incredibly easy to create professional-quality
              personalized greetings
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Creating personalized greetings has never been easier
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Template",
                description:
                  "Browse our collection and pick your favorite design",
              },
              {
                step: "2",
                title: "Customize",
                description: "Add names, messages, and personal touches",
              },
              {
                step: "3",
                title: "Download",
                description: "Get your high-quality SVG file instantly",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white transform scale-105"
                    : "bg-white border-2 border-gray-200"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-purple-100" : "text-gray-500"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center ${
                          plan.popular ? "text-purple-100" : "text-gray-600"
                        }`}
                      >
                        <Check
                          className={`w-5 h-5 mr-3 ${
                            plan.popular ? "text-white" : "text-green-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-white text-purple-600 hover:bg-gray-100"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Greetings?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already creating beautiful,
            personalized SVG greetings. Start with our free templates or unlock
            premium features with a paid plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
              Sign Up Free
            </button>
            <Link to="/categories">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-600 transition-all font-semibold text-lg">
                Explore Templates
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
