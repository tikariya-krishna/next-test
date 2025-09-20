"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-20 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Our Blog
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Welcome to <span className="font-semibold">The Daily Journal</span> —
          a space where we share insights, stories, and tutorials on web
          development, design, productivity, and everything in between.  
          Our goal is to inspire and educate, while building a community of
          creative thinkers.
        </p>

        <div className="bg-white rounded-2xl shadow p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            We believe that knowledge grows when shared. This blog was created
            to simplify complex topics, provide practical tips, and encourage
            readers to explore technology with curiosity and confidence.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <img
            src="/photo.png"
            alt="Author"
            className="w-24 h-24 rounded-full object-cover shadow"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Krishna T.</h3>
            <p className="text-gray-600">
              Developer • Writer • Lifelong Learner  
              <br />
              I enjoy exploring the latest trends in web tech, sharing what I
              learn, and helping others grow in their coding journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
