import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Dumbbell } from "lucide-react";
import { Clock, Users, Award, Zap, Heart, Utensils } from "lucide-react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

function App() {
  const faqItems: FAQItem[] = [
    {
      question: "What if I'm new to fitness?",
      answer:
        "My programs cater to all levels—from absolute beginners to advanced athletes.",
    },
    {
      question: "Can I pause or cancel my membership?",
      answer: "Yes, you can manage your subscription in your account settings.",
    },
    {
      question: "How often are new workouts added?",
      answer:
        "New workouts are added weekly to keep your routine fresh and challenging.",
    },
    {
      question: "Do I need special equipment?",
      answer:
        "Most programs offer options for home workouts with minimal equipment and gym versions.",
    },
    {
      question: "Is there nutritional guidance?",
      answer:
        "Yes, all memberships include basic nutritional guidelines and meal planning resources.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-emerald-400 font-medium text-xl">
                  Hi, I'm John
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Your fitness trainer
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-4"></div>
              </div>

              <p className="text-gray-300 text-lg">
                I'm [Coach Name], a certified personal trainer with 10+ years of
                experience in helping individuals reach their fitness goals. My
                approach blends strength training, nutrition planning, and
                mindset coaching to create lasting change.
              </p>

              <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                Book a Free Consultation
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 z-10"></div>

                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Personal trainer helping client with exercise"
                  className="w-full h-auto object-cover"
                />

                {/* Navigation Buttons */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-all">
                  <ChevronRight size={24} />
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-600/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Fitness Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-4">
                <Dumbbell className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Training
              </h3>
              <p className="text-gray-400">
                Custom workout plans designed specifically for your fitness
                level and goals.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-4">
                <Dumbbell className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
              <p className="text-gray-400">
                Expert advice on meal planning and nutritional strategies to
                support your training.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-3 bg-emerald-500/20 rounded-lg w-fit mb-4">
                <Dumbbell className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mindset Coaching</h3>
              <p className="text-gray-400">
                Mental techniques to help you stay motivated and overcome
                fitness plateaus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-16 bg-white rounded-2xl shadow-sm border border-gray-100 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore My Products
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the program that fits your lifestyle and goals. I offer a
            variety of options to help you transform your body and mind.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Services
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            One-time or specialized sessions—pay only for what you need, when
            you need it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Badminton Court"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Badminton Court
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $15
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Reserve a court for a personal session or small group
                  training.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Book a Call
                </button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Personal Training Session"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Personal Training Session
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $60
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  One-on-one workout tailored to your current fitness level.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Book a Call
                </button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Nutrition Consultation"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Nutrition Consultation
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $45
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Personalized meal planning and nutritional guidance.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Memberships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Memberships
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Regular access to facilities and services at a discounted rate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Membership Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Basic Membership"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Basic Membership
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $49/mo
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Access to gym facilities and one group class per week.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>

            {/* Membership Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200 relative">
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                Popular
              </div>
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Premium Membership"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Premium Membership
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $89/mo
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Unlimited access to all facilities and classes plus one PT
                  session monthly.
                </p>
                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>

            {/* Membership Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Family Membership"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Family Membership
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $129/mo
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Access for up to 4 family members with shared benefits.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Packages
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Comprehensive programs designed to achieve specific fitness goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {/* Package Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Weight Loss Program"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Weight Loss Program
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $299
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  12-week program with personalized workouts and nutrition plan.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Package Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Muscle Building"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Muscle Building
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $349
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  16-week program focused on strength training and muscle
                  development.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Package Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Total Transformation"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    Total Transformation
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-lg font-semibold px-3 py-1 rounded-full">
                    $499
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  24-week comprehensive program for complete body and mind
                  transformation.
                </p>
                <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
              <HelpCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about our services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Still have questions?{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:text-indigo-500"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-16 px-4 flex items-center justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced CTA Section */}
          <div className="relative overflow-hidden bg-white rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="p-8 md:p-10 md:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
                  <Sparkles size={16} className="mr-2" />
                  <span>Limited Offer</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-tight">
                  Transform Your Fitness{" "}
                  <span className="text-teal-600">Journey Today</span>
                </h2>

                <p className="text-slate-600 mb-6 max-w-lg">
                  Book your free consultation and get a personalized fitness
                  plan designed for your goals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                      <Clock size={12} className="text-teal-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      30-minute expert coaching session
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mr-2">
                      <Award size={12} className="text-teal-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      Proven results with certified trainers
                    </p>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-3 text-sm font-medium text-white hover:from-teal-600 hover:to-emerald-600 transition-all focus:outline-none focus:ring-2 focus:ring-teal-300">
                  Book Free Consultation
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Right Image */}
              <div className="md:w-2/5 relative">
                <div className="h-60 md:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Person working out"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Overlay */}
                <div className="absolute bottom-3 right-3 left-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow">
                  <div className="flex items-center space-x-2">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                        SM
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-800">
                        "Best decision I've made this year!"
                      </p>
                      <p className="text-xs text-slate-500">
                        — Sarah M., Lost 25 lbs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Contact Info with Icons */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">coach@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Your Gym Location</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
            © 2025 Coach [Name]. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
