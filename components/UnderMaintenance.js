"use client";
import React from "react";
import Image from "next/image";

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-6">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <Image
            src="/undermaintanance.jpg" // <-- Put your illustration inside public/icons
            alt="Under Maintenance"
            width={300}
            height={300}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Site Under Maintenance
          </h2>
          <p className="text-gray-600 max-w-xl">
            We’re currently working hard to improve your experience.  
            Please check back soon — the blog will be back online shortly!
          </p>
        </div>

        <div className="mt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Blog Platform. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default UnderMaintenance;
