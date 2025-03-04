import React from "react";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Store,
  Guitar as Hospital,
  GraduationCap,
  Warehouse,
  Utensils,
  Users,
  Award,
  Leaf,
  Clock,
  ThumbsUp,
  Home,
  Sparkles,
  DoorOpen,
  Construction,
  Bath,
  Wind,
  Scan,
  Calendar,
} from "lucide-react";
import {
  Scissors,
  Flower2,
  Droplets,
  TreePine,
  CloudRain,
  Waves,
  Shovel,
} from "lucide-react";

import {  SunSnow as Snow, Briefcase, Truck, Sprout, Paintbrush } from 'lucide-react';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
        {/* Navigation */}
        <nav className="bg-white border-b border-[#E5E7EB] py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#111827]" />
              <span className="font-bold text-xl">
                Apex Property Solutions & Co.
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Home
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                About Us
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Cleaning Services
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Custom Care Services
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Contact Us
              </a>
            </div>
            <button className="bg-[#111827] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all">
              Get a Free Quote
            </button>
          </div>
        </nav>

        {/* Hero Section - Updated with new residential cleaning image */}
        <div className="relative bg-[#111827] text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            <div className="container mx-auto px-4 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 inline-flex items-center">
                  <div className="h-[1px] w-6 bg-white mr-2"></div>
                  <span className="text-sm uppercase tracking-wider">
                    RESIDENTIAL CLEANING SERVICES
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  A Cleaner Home, A Healthier Life
                </h1>
                <p className="text-lg max-w-2xl mb-8">
                  Your home should be a place of comfort, relaxation, and
                  cleanliness. At Apex Property Solutions & Co., we provide
                  professional residential cleaning services designed to keep
                  your living space spotless, fresh, and inviting.
                </p>
                <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                  Book a Cleaning Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section - Updated with new residential image and fixed height */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="inline-flex items-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our Home Cleaning Services
              </h2>
              <p className="text-[#4B5563] mb-6">
                We offer a comprehensive range of cleaning solutions to fit your
                needs and lifestyle.
              </p>
              <p className="text-[#4B5563]">
                From regular maintenance to deep cleaning, our professional team
                ensures your home remains a clean, healthy, and inviting space
                for you and your family.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Professional home cleaning"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section - Updated with residential cleaning services */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                  OUR EXPERTISE
                </span>
                <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our Residential Cleaning Services
              </h2>
              <p className="text-[#4B5563] max-w-2xl mx-auto">
                We provide a wide range of professional cleaning services,
                ensuring a spotless and hygienic environment for your home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Regular House Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Weekly, bi-weekly, or custom schedules to maintain a clean
                    and tidy home.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
                  <p className="text-[#4B5563]">
                    A thorough, top-to-bottom clean to refresh every corner of
                    your house.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <DoorOpen className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Move-In/Move-Out Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Stress-free cleaning for a seamless transition into your new
                    home or preparing a property for new occupants.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Construction className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Post-Construction Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Removing dust, debris, and residues to make your home
                    move-in ready after renovations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Bath className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Kitchen & Bathroom Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Sanitizing high-traffic areas to ensure a hygienic and
                    sparkling space.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Wind className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Carpet & Upholstery Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Eliminating dirt, allergens, and stains for a healthier
                    indoor environment.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Scan className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Window & Glass Cleaning
                  </h3>
                  <p className="text-[#4B5563]">
                    Streak-free cleaning for a clear and polished view.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Seasonal Cleaning</h3>
                  <p className="text-[#4B5563]">
                    Specialized cleaning services for spring, fall, and holiday
                    preparations to keep your home fresh year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - Updated with new residential image and fixed height */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Residential cleaning team"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="inline-flex items-center mb-4">
                  <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                  <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose Apex Property Solutions & Co.?
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Trusted & Experienced Cleaners
                      </span>
                      <p className="text-[#4B5563]">
                        Our skilled professionals are trained to handle all
                        aspects of residential cleaning with care and
                        efficiency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Eco-Friendly Products</span>
                      <p className="text-[#4B5563]">
                        We use safe, non-toxic cleaning solutions to protect
                        your family and pets.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Customized Cleaning Plans
                      </span>
                      <p className="text-[#4B5563]">
                        Tailored services to meet your specific needs and
                        preferences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Reliable & Punctual Service
                      </span>
                      <p className="text-[#4B5563]">
                        We value your time and ensure consistent, high-quality
                        cleaning every visit.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Affordable Rates</span>
                      <p className="text-[#4B5563]">
                        Competitive pricing for premium home cleaning services.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section - New section for residential cleaning */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                OUR PROCESS
              </span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Book Your Service</h3>
                <p className="text-[#4B5563]">
                  Schedule your cleaning service online or by phone at your
                  convenience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Get a Custom Cleaning Plan</h3>
                <p className="text-[#4B5563]">
                  We'll create a tailored cleaning plan based on your home's
                  specific needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">
                  Professional Service Delivery
                </h3>
                <p className="text-[#4B5563]">
                  Our trained professionals will clean your home with care and
                  attention to detail.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Final Quality Check</h3>
                <p className="text-[#4B5563]">
                  We ensure everything is spotless and meets our high standards
                  before we leave.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section - New section for residential cleaning */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                TESTIMONIALS
              </span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

            <div className="bg-[#F9FAFB] p-8 rounded-lg border border-[#E5E7EB] shadow-sm">
              <div className="text-4xl text-[#111827] mb-4">"</div>
              <p className="text-lg text-[#4B5563] mb-6">
                I've been using Apex Property Solutions for over a year now, and
                I couldn't be happier with their service. Their attention to
                detail is impressive, and my home always feels fresh and
                spotless after they leave. The team is professional, reliable,
                and truly cares about providing excellent service.
              </p>
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-[#4B5563]">Residential Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Updated with residential cleaning focus */}
        <div className="py-16 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Enjoy a Spotless Home Today
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Let Apex Property Solutions & Co. handle the cleaning so you can
              focus on what truly matters. Contact us today for a free quote and
              experience the highest standard of residential cleaning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Get a Free Quote
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">📞</span>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p>1-800-555-1234</p>
              </div>

              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">📧</span>
                <h3 className="font-bold mb-1">Email</h3>
                <p>info@apexsolutions.com</p>
              </div>

              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">🌐</span>
                <h3 className="font-bold mb-1">Visit</h3>
                <p>www.apexsolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#111827] text-white pt-12 pb-6 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-white" />
                  <span className="font-bold text-xl">
                    Apex Property Solutions & Co.
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  We're a superior residential and commercial cleaning service
                  with competitive solutions and a commitment to excellence.
                </p>
                <button className="text-sm border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all">
                  Get a Free Quote
                </button>
              </div>

              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Cleaning Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Custom Care Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Residential Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Commercial Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Deep Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Move-In/Move-Out Cleaning
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">📞</span>
                    <span className="text-gray-300">1-800-555-1234</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">✉️</span>
                    <span className="text-gray-300">
                      info@apexsolutions.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">🕒</span>
                    <span className="text-gray-300">Mon-Fri: 8am-6pm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">💬</span>
                    <span className="text-gray-300">
                      24/7 Support Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                © 2025 Apex Property Solutions & Co. All Rights Reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
        {/* Navigation */}
        <nav className="bg-white border-b border-[#E5E7EB] py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-[#111827]" />
              <span className="font-bold text-xl">
                Apex Property Solutions & Co.
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Home
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                About Us
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Cleaning Services
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Custom Care Services
              </a>
              <a href="#" className="text-[#111827] hover:text-[#4B5563]">
                Contact Us
              </a>
            </div>
            <button className="bg-[#111827] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all">
              Get a Free Quote
            </button>
          </div>
        </nav>

        {/* Hero Section - Updated with outdoor care image */}
        <div className="relative bg-[#111827] text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          >
            <div className="container mx-auto px-4 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 inline-flex items-center">
                  <div className="h-[1px] w-6 bg-white mr-2"></div>
                  <span className="text-sm uppercase tracking-wider">
                    RESIDENTIAL OUTDOOR CARE SERVICES
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Transform Your Outdoor Space with Expert Care
                </h1>
                <p className="text-lg max-w-2xl mb-8">
                  Your home's outdoor space is an extension of your living
                  area—a place to relax, entertain, and enjoy nature. At Apex
                  Property Solutions & Co., we provide top-tier residential
                  outdoor care services to enhance the beauty, functionality,
                  and longevity of your landscape.
                </p>
                <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                  Book a Service Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section - Updated with outdoor care image */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="inline-flex items-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our Outdoor Care Services
              </h2>
              <p className="text-[#4B5563] mb-6">
                We offer a comprehensive range of outdoor maintenance and
                enhancement solutions tailored to your property's unique needs.
              </p>
              <p className="text-[#4B5563]">
                From lawn care to landscape design, our professional team
                ensures your outdoor spaces remain beautiful, functional, and
                well-maintained throughout the year.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1599629954294-14df9f8291ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Professional lawn care"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section - Updated with outdoor care services */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                  OUR EXPERTISE
                </span>
                <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our Residential Outdoor Care Services
              </h2>
              <p className="text-[#4B5563] max-w-2xl mx-auto">
                We provide a wide range of professional outdoor care services,
                ensuring a beautiful and well-maintained landscape for your
                home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Scissors className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Lawn Care & Maintenance
                  </h3>
                  <p className="text-[#4B5563]">
                    Keep your lawn lush, healthy, and perfectly manicured
                    year-round with professional mowing, fertilization,
                    aeration, and weed control.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Flower2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Garden & Landscape Design
                  </h3>
                  <p className="text-[#4B5563]">
                    From fresh plant installations to complete garden makeovers,
                    we create stunning outdoor spaces that match your vision.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Shovel className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Mulching & Soil Enrichment
                  </h3>
                  <p className="text-[#4B5563]">
                    Improve soil health, retain moisture, and add a polished
                    look with premium mulch and organic soil treatments.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <TreePine className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tree & Shrub Care</h3>
                  <p className="text-[#4B5563]">
                    Pruning, trimming, and health assessments to maintain the
                    strength and beauty of your greenery.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <CloudRain className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Irrigation & Water Management
                  </h3>
                  <p className="text-[#4B5563]">
                    Efficient watering solutions to keep your plants thriving
                    while conserving water.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Waves className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Hardscape Cleaning & Maintenance
                  </h3>
                  <p className="text-[#4B5563]">
                    Power washing and sealing for driveways, patios, and
                    pathways to maintain a clean, polished look.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Seasonal Cleanups</h3>
                  <p className="text-[#4B5563]">
                    Spring and fall cleanups to clear away debris, prepare for
                    new growth, and keep your property looking its best
                    year-round.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                    <Droplets className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Lawn Fertilization & Treatment
                  </h3>
                  <p className="text-[#4B5563]">
                    Custom fertilization programs and treatments to address
                    specific lawn issues and promote healthy growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - Updated with outdoor care image */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Professional landscaping team"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="inline-flex items-center mb-4">
                  <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                  <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose Apex Property Solutions & Co.?
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Reliable & Professional Team
                      </span>
                      <p className="text-[#4B5563]">
                        Our skilled professionals are trained to handle all
                        aspects of outdoor care with expertise and attention to
                        detail.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Eco-Friendly & Sustainable Practices
                      </span>
                      <p className="text-[#4B5563]">
                        We use environmentally responsible methods and products
                        to protect your property and the planet.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Customized Care Plans</span>
                      <p className="text-[#4B5563]">
                        Tailored services to meet the specific needs of your
                        outdoor space and landscape.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">
                        Competitive Pricing & Transparent Quotes
                      </span>
                      <p className="text-[#4B5563]">
                        Fair, upfront pricing with no hidden fees or surprises.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Services Section - New section for outdoor care */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                YEAR-ROUND CARE
              </span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-12">Seasonal Outdoor Care</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">🌱</span>
                </div>
                <h3 className="font-bold mb-2">Spring</h3>
                <p className="text-[#4B5563]">
                  Lawn aeration, fertilization, mulching, and planting to
                  prepare for the growing season.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">☀️</span>
                </div>
                <h3 className="font-bold mb-2">Summer</h3>
                <p className="text-[#4B5563]">
                  Regular mowing, watering, pest control, and maintenance to
                  keep your landscape thriving.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">🍂</span>
                </div>
                <h3 className="font-bold mb-2">Fall</h3>
                <p className="text-[#4B5563]">
                  Leaf removal, lawn treatments, pruning, and winterization to
                  prepare for colder months.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">❄️</span>
                </div>
                <h3 className="font-bold mb-2">Winter</h3>
                <p className="text-[#4B5563]">
                  Snow removal, winter protection for plants, and planning for
                  spring landscaping projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Section - New section for outdoor care */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                  OUR WORK
                </span>
                <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Transformations We've Created
              </h2>
              <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
                Browse through some of our recent outdoor projects and see how
                we've helped homeowners transform their landscapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Landscaping project"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-bold mb-1">Modern Garden Design</h3>
                  <p className="text-sm text-[#4B5563]">
                    Complete landscape renovation with custom hardscaping and
                    native plants
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Lawn care project"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-bold mb-1">Lawn Restoration</h3>
                  <p className="text-sm text-[#4B5563]">
                    Transforming a patchy, unhealthy lawn into a lush, green
                    carpet
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1621244335281-4aa5e4c7c1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Patio project"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-bold mb-1">Outdoor Living Space</h3>
                  <p className="text-sm text-[#4B5563]">
                    Custom patio design with integrated planters and outdoor
                    lighting
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="inline-flex items-center text-[#111827] font-medium hover:underline">
                View More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Section - Updated for outdoor care */}
        <div className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">
                TESTIMONIALS
              </span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

            <div className="bg-white p-8 rounded-lg border border-[#E5E7EB] shadow-sm">
              <div className="text-4xl text-[#111827] mb-4">"</div>
              <p className="text-lg text-[#4B5563] mb-6">
                Apex Property Solutions transformed our backyard from an
                overgrown mess into a beautiful outdoor retreat. Their team was
                professional, knowledgeable, and attentive to our needs. The
                lawn has never looked better, and the new garden beds are
                thriving. We couldn't be happier with the results!
              </p>
              <div className="flex items-center justify-center">
                <div className="mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold">Michael Thompson</p>
                  <p className="text-sm text-[#4B5563]">Residential Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Updated with outdoor care focus */}
        <div className="py-16 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container mx-auto px-4 text-center relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Let Apex Property Solutions & Co. help you achieve a
              well-maintained, visually stunning outdoor space. Contact us today
              for a consultation and discover how we can enhance your home's
              exterior.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Get a Free Quote
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">📞</span>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p>1-800-555-1234</p>
              </div>

              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">📧</span>
                <h3 className="font-bold mb-1">Email</h3>
                <p>info@apexsolutions.com</p>
              </div>

              <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
                <span className="text-2xl mb-2">🌐</span>
                <h3 className="font-bold mb-1">Visit</h3>
                <p>www.apexsolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#111827] text-white pt-12 pb-6 border-t border-gray-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-white" />
                  <span className="font-bold text-xl">
                    Apex Property Solutions & Co.
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  We're a superior residential and commercial property care
                  service with competitive solutions and a commitment to
                  excellence.
                </p>
                <button className="text-sm border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all">
                  Get a Free Quote
                </button>
              </div>

              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Cleaning Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Custom Care Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Residential Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Commercial Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Outdoor Care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Lawn Maintenance
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">📞</span>
                    <span className="text-gray-300">1-800-555-1234</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">✉️</span>
                    <span className="text-gray-300">
                      info@apexsolutions.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">🕒</span>
                    <span className="text-gray-300">Mon-Fri: 8am-6pm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-300 mr-2">💬</span>
                    <span className="text-gray-300">
                      24/7 Support Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-300 mb-4 md:mb-0">
                © 2025 Apex Property Solutions & Co. All Rights Reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#E5E7EB] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-[#111827]" />
            <span className="font-bold text-xl">Apex Property Solutions & Co.</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-[#111827] hover:text-[#4B5563]">Home</a>
            <a href="#" className="text-[#111827] hover:text-[#4B5563]">About Us</a>
            <a href="#" className="text-[#111827] hover:text-[#4B5563]">Cleaning Services</a>
            <a href="#" className="text-[#111827] hover:text-[#4B5563]">Custom Care Services</a>
            <a href="#" className="text-[#111827] hover:text-[#4B5563]">Contact Us</a>
          </div>
          <button className="bg-[#111827] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all">
            Get a Free Quote
          </button>
        </div>
      </nav>

      {/* Hero Section - Updated with commercial outdoor care image */}
      <div className="relative bg-[#111827] text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div 
          className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center">
                <div className="h-[1px] w-6 bg-white mr-2"></div>
                <span className="text-sm uppercase tracking-wider">COMMERCIAL OUTDOOR CARE SERVICES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Commercial Property's Curb Appeal</h1>
              <p className="text-lg max-w-2xl mb-8">At Apex Property Solutions & Co., we understand that the exterior of your commercial property speaks volumes about your brand. Our specialized commercial outdoor care services are designed to create a welcoming, professional environment that enhances your business image while ensuring safety and sustainability.</p>
              <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section - Updated with commercial outdoor care image */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="inline-flex items-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">OUR EXPERTISE</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Commercial Outdoor Care Solutions</h2>
            <p className="text-[#4B5563] mb-6">
              We offer a full range of commercial outdoor care solutions tailored to meet the demands of business environments and public spaces.
            </p>
            <p className="text-[#4B5563]">
              From regular maintenance to custom landscape design, our professional team ensures your commercial property maintains a polished, professional appearance year-round.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Professional commercial landscaping" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Updated with commercial outdoor care services */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">OUR SERVICES</span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Commercial Outdoor Care Services</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">
              We provide comprehensive outdoor maintenance solutions designed specifically for commercial properties and business environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <Scissors className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lawn & Landscape Maintenance</h3>
                <p className="text-[#4B5563]">
                  Regular mowing, fertilization, and weed control to keep your grounds immaculate and inviting.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <Flower2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Landscape Design & Installation</h3>
                <p className="text-[#4B5563]">
                  Custom designs, seasonal plantings, and hardscape enhancements that align with your corporate aesthetic.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <CloudRain className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Irrigation & Water Management</h3>
                <p className="text-[#4B5563]">
                  Efficient irrigation systems and water-saving practices to maintain vibrant landscapes and minimize resource use.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <Waves className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hardscape Cleaning & Restoration</h3>
                <p className="text-[#4B5563]">
                  Power washing, sealing, and repairs for walkways, parking lots, and outdoor structures to ensure a polished look.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <Snow className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Snow & Ice Management</h3>
                <p className="text-[#4B5563]">
                  Proactive snow removal, de-icing, and winter safety planning to keep your property accessible and secure during colder months.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seasonal Cleanups & Maintenance</h3>
                <p className="text-[#4B5563]">
                  Comprehensive cleanups to prepare your property for seasonal transitions, enhancing longevity and reducing long-term costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Types Section - New section for commercial services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">WHO WE SERVE</span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Commercial Properties We Service</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
              We provide outdoor care services to a wide range of commercial properties, each with unique needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Office Buildings</h3>
              <p className="text-sm text-[#4B5563]">Creating professional, welcoming entrances and common areas</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Retail Centers</h3>
              <p className="text-sm text-[#4B5563]">Enhancing curb appeal to attract customers and increase foot traffic</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Healthcare Facilities</h3>
              <p className="text-sm text-[#4B5563]">Maintaining healing environments with meticulous attention to detail</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Educational Institutions</h3>
              <p className="text-sm text-[#4B5563]">Creating safe, attractive campus grounds for students and visitors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Warehouse className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Industrial Properties</h3>
              <p className="text-sm text-[#4B5563]">Functional, low-maintenance solutions for industrial complexes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Restaurants & Hospitality</h3>
              <p className="text-sm text-[#4B5563]">Inviting outdoor spaces that enhance the dining and guest experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Homeowner Associations</h3>
              <p className="text-sm text-[#4B5563]">Consistent, high-quality care for community common areas</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Corporate Campuses</h3>
              <p className="text-sm text-[#4B5563]">Comprehensive care for expansive corporate grounds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - Updated with commercial focus */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Commercial landscaping team" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="inline-flex items-center mb-4">
                <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
                <span className="text-sm uppercase tracking-wider text-[#4B5563]">WHY PARTNER WITH US</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Why Partner with Apex Property Solutions & Co.?</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Tailored Service Plans</span>
                    <p className="text-[#4B5563]">Customized schedules and maintenance strategies designed around your business operations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Expert Knowledge & Compliance</span>
                    <p className="text-[#4B5563]">Adherence to industry standards and local regulations to ensure a safe and compliant outdoor environment.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Sustainable Practices</span>
                    <p className="text-[#4B5563]">Environmentally responsible techniques that promote long-term landscape health and resource conservation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#111827] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Transparent Pricing & Timely Service</span>
                    <p className="text-[#4B5563]">Competitive rates and clear communication to keep your project on track.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section - New section for commercial services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">OUR PROCESS</span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">How We Work With Commercial Clients</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
              Our streamlined process ensures efficient service delivery and minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mb-4 z-10 relative">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="absolute top-8 left-8 h-[calc(100%-32px)] w-0.5 bg-gray-200 z-0"></div>
              <h3 className="font-bold mb-2">Initial Consultation</h3>
              <p className="text-[#4B5563]">We assess your property's needs and discuss your goals and expectations.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mb-4 z-10 relative">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="absolute top-8 left-8 h-[calc(100%-32px)] w-0.5 bg-gray-200 z-0"></div>
              <h3 className="font-bold mb-2">Customized Proposal</h3>
              <p className="text-[#4B5563]">We develop a tailored service plan with transparent pricing and clear deliverables.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mb-4 z-10 relative">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="absolute top-8 left-8 h-[calc(100%-32px)] w-0.5 bg-gray-200 z-0"></div>
              <h3 className="font-bold mb-2">Service Implementation</h3>
              <p className="text-[#4B5563]">Our professional team executes the agreed-upon services with minimal disruption to your operations.</p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-[#111827] text-white rounded-full flex items-center justify-center mb-4 z-10 relative">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Ongoing Management</h3>
              <p className="text-[#4B5563]">Regular maintenance, quality checks, and responsive communication to ensure continued satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section - Updated for commercial projects */}
      <div className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
              <span className="text-sm uppercase tracking-wider text-[#4B5563]">OUR PROJECTS</span>
              <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Commercial Projects Showcase</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto mb-8">
              Browse through some of our recent commercial outdoor projects and see how we've helped businesses enhance their exterior spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Office building landscaping" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-1">Corporate Office Complex</h3>
                <p className="text-sm text-[#4B5563]">Complete landscape redesign with sustainable irrigation and seasonal color rotation</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Retail center landscaping" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-1">Retail Shopping Center</h3>
                <p className="text-sm text-[#4B5563]">High-traffic landscape design with durable plantings and efficient maintenance plan</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Hotel landscaping" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold mb-1">Hospitality Complex</h3>
                <p className="text-sm text-[#4B5563]">Resort-style landscaping with custom water features and outdoor gathering spaces</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="inline-flex items-center text-[#111827] font-medium hover:underline">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section - Updated for commercial clients */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-6 bg-[#111827] mr-2"></div>
            <span className="text-sm uppercase tracking-wider text-[#4B5563]">TESTIMONIALS</span>
            <div className="h-[1px] w-6 bg-[#111827] ml-2"></div>
          </div>
          <h2 className="text-3xl font-bold mb-8">What Our Commercial Clients Say</h2>
          
          <div className="bg-[#F9FAFB] p-8 rounded-lg border border-[#E5E7EB] shadow-sm">
            <div className="text-4xl text-[#111827] mb-4">"</div>
            <p className="text-lg text-[#4B5563] mb-6">
              Apex Property Solutions has been maintaining our office complex grounds for over three years, and the results have been exceptional. Their team is responsive, professional, and proactive in addressing our property's needs. The landscape has become a point of pride for our business, and we regularly receive compliments from clients and employees alike.
            </p>
            <div className="flex items-center justify-center">
              <div className="mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Commercial Client" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Jonathan Reynolds</p>
                <p className="text-sm text-[#4B5563]">Facility Manager, Westside Corporate Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Updated with commercial focus */}
      <div className="py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Get in Touch Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Transform your commercial property's exterior into a professional and inviting space. Contact Apex Property Solutions & Co. for a consultation and discover how our commercial outdoor care services can elevate your business presence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="bg-white text-[#111827] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Request a Consultation
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
              View Service Plans
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
              <span className="text-2xl mb-2">📞</span>
              <h3 className="font-bold mb-1">Call Us</h3>
              <p>1-800-555-1234</p>
            </div>
            
            <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
              <span className="text-2xl mb-2">📧</span>
              <h3 className="font-bold mb-1">Email</h3>
              <p>commercial@apexsolutions.com</p>
            </div>
            
            <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-lg">
              <span className="text-2xl mb-2">🌐</span>
              <h3 className="font-bold mb-1">Visit</h3>
              <p>www.apexsolutions.com/commercial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111827] text-white pt-12 pb-6 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-white" />
                <span className="font-bold text-xl">Apex Property Solutions & Co.</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                We're a superior residential and commercial property care service with competitive solutions and a commitment to excellence.
              </p>
              <button className="text-sm border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-all">
                Get a Free Quote
              </button>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cleaning Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Custom Care Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Residential Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Commercial Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Outdoor Care</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Lawn Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">📞</span>
                  <span className="text-gray-300">1-800-555-1234</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">✉️</span>
                  <span className="text-gray-300">info@apexsolutions.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">🕒</span>
                  <span className="text-gray-300">Mon-Fri: 8am-6pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">💬</span>
                  <span className="text-gray-300">24/7 Support Available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2025 Apex Property Solutions & Co. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
