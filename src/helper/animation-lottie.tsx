"use client";

import React from 'react';

const AnimationLottie = ({ animationPath }: { animationPath: any }) => {
  return (
    <div className="flex items-center justify-center h-full w-full opacity-70">
      {/* Simple Placeholder for Lottie Animation */}
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-[#1a1443]/20 rounded-xl border border-[#25213b] animate-pulse">
        <span className="text-[#16f2b3] text-lg font-medium tracking-wider">ANIMATION</span>
      </div>
    </div>
  );
};

export default AnimationLottie;
