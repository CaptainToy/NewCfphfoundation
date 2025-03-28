import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import IMG1 from "../../assets/imglolz.jpg";
import IMG2 from "../../assets//donnor/IMG-20250215-WA0058.jpg";
import IMG3 from "../../assets/donnor/IMG-20250215-WA0064.jpg";
import IMG4 from "../../assets/donnor/IMG-20250215-WA0061.jpg";
import IMG5 from "../../assets/donnor/IMG-20250215-WA0062.jpg";

const Header = () => {
  return (
    <div className="min-h-screen bg-white font-sans" style={{paddingLeft:"50px", paddingRight: "50px"}}>
      <div className="relative min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left content section */}
            <div className="w-full lg:w-5/12 pt-8">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-600 font-medium">1000+ Donor active members</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
                Together for making a brighter future
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Together, we can make a real impact in communities around the world. Help us bring hope and support.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <button className="bg-black text-white px-6 py-3 !rounded-full hover:bg-gray-800 transition-all flex items-center whitespace-nowrap">
                  Donate Now
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
                <button className="text-gray-700 px-6 py-3 hover:text-primary transition-all whitespace-nowrap">
                  Learn More
                </button>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-700 mb-6">Our most loved partners</h3>
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">waves</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">RotoShow</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">travelers.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right image section with overlays */}
            <div className="w-full lg:w-7/12 relative">
              <div className="rounded-3xl overflow-hidden relative">
                <img
                  src="https://public.readdy.ai/ai/img_res/9ba092f68258252f0f07dae65a9966ba.jpg"
                  alt="Volunteers cleaning beach"
                  className="w-full h-[500px] object-cover"
                />
                {/* Quote overlay */}
                <div className="absolute top-6 left-6 bg-white rounded-xl p-4 flex items-start max-w-[300px]">
                  <img
                    src="https://public.readdy.ai/ai/img_res/0448d37f62e97fc8d88c49348858de93.jpg"
                    alt="Testimonial"
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-800">"Because of this organization, I was given hope and a second chance"</p>
                  </div>
                </div>
                {/* Video button overlay */}
                <div className="absolute top-1/3 right-6 bg-white rounded-xl p-4 flex flex-col items-center">
                  <p className="text-sm text-gray-800 mb-2">Watch our story reel</p>
                  <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <i className="ri-play-fill text-white"></i>
                  </button>
                </div>
                {/* Impact overlay */}
                <div className="absolute bottom-24 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-sm font-medium text-gray-800">Real lives changed</p>
                  <p className="text-xs text-gray-600">by your support</p>
                </div>
                {/* Team overlay */}
                <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 max-w-[220px]">
                  <h4 className="font-medium text-gray-800 mb-1">Dedicated team</h4>
                  <p className="text-xs text-gray-600 mb-3">Providing immediate resources and aid to those who are in need or emergency</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <img src="https://public.readdy.ai/ai/img_res/9b9048c6d0413ee2763ba31655e49c71.jpg" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src="https://public.readdy.ai/ai/img_res/e4d56d53fcea0fbc6e0e920a7852483d.jpg" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src="https://public.readdy.ai/ai/img_res/d4293f30abf623035d95e40eec0b2bcd.jpg" alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <span className="font-bold text-xl">50k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
