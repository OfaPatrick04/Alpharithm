import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-[#04142B] mt-[-90px] pt-[138px] pb-[128px] flex items-center justify-center text-center overflow-hidden">
      <div className="w-full max-w-[860px] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 gap-6 z-10">
        <h3 className="text-[#7191FF] text-[14px] sm:text-[16px] font-bold font-jakarta tracking-[-0.02em]">
          Leverage on Automation
        </h3>

        <h1 className="text-white text-[42px] sm:text-[58px] md:text-[76px] font-semibold font-figtree leading-[48px] sm:leading-[64px] md:leading-[82px] tracking-[-0.02em] px-2 sm:px-8">
          AI Models for Business Solutions
        </h1>

        <p className="text-white text-[16px] sm:text-[18px] md:text-[22px] font-medium font-jakarta text-center leading-[28px] sm:leading-[32px] md:leading-[38px] tracking-[-0.02em]">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-[12px] px-6 py-3 font-semibold text-[16px] sm:text-[18px] font-figtree text-[#05152C] cursor-pointer"
        >
          Get Started Now
        </motion.button>
      </div>

      <div className="absolute w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] md:w-[963px] md:h-[963px] bg-[#0037FF] blur-[280px] sm:blur-[400px] md:blur-[585.2px] rounded-full top-[80%] translate-y-[10%]"></div>
    </div>
  );
};

export default Hero;
