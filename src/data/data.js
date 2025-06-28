
import { Heart, Calendar, Quote, Gift, Edit3, Download, Palette, Zap } from "lucide-react";
// import congratulation from "../assets/congratulations.png";

// Categories used in Navbar, Footer And LandingPage
const categories = [
    {
      name: "Birthday Cards",
      icon: Gift,
      color: "from-pink-500 to-rose-500",
        count: "50+",
      
    },
    {
      name: "Anniversary",
      icon: Heart,
      color: "from-red-500 to-pink-500",
        count: "30+",
      
    },
    {
      name: "Quotes",
      icon: Quote,
      color: "from-blue-500 to-indigo-500",
      count: "40+",
    },
    {
      name: "Special Events",
      icon: Calendar,
      color: "from-purple-500 to-violet-500",
      count: "25+",
    },
];

// used in LandingPage
const features = [
    {
      icon: Edit3,
      title: "Easy Customization",
      description:
        "Simply add names and personal messages to beautiful pre-designed templates",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Download,
      title: "Instant Download",
      description:
        "Get your customized SVG files immediately in high-quality format",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Palette,
      title: "Professional Design",
      description:
        "All templates are crafted by professional designers for stunning results",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create personalized greetings in under 30 seconds",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];
  
  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "150+", label: "Templates Available" },
    { number: "50,000+", label: "Downloads" },
    { number: "4.9/5", label: "User Rating" },
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Planner",
      content:
        "GreetArt has revolutionized how I create personalized invitations. The quality is outstanding!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Small Business Owner",
      content:
        "Perfect for creating custom thank you cards for my clients. Saves me hours of design work.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content:
        "My students love the personalized birthday cards I make using GreetArt templates.",
      rating: 5,
    },
  ];
  
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5 downloads per month", "Basic templates", "Standard quality"],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      features: [
        "Unlimited downloads",
        "Premium templates",
        "HD quality",
        "Priority support",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Creator",
      price: "$19.99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Upload your templates",
        "Earn from downloads",
        "Analytics dashboard",
      ],
      buttonText: "Become Creator",
      popular: false,
    },
];

// used in CategoriesPage
const allCategories = [
  { name: "Anniversary", image: "/assets/birthday.png" },
  { name: "Birthday", image: "/assets/birthday.png" },
  { name: "Quotes", image: "/assets/quotes.png" },
  { name: "Thank You", image: "/assets/thankyou.png" },
//   { name: "Congratulations", image: congratulation },
];
  
export {categories, features, stats,testimonials,pricingPlans, allCategories}