import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='relative bg-[#04142B] mt-[-90px] pt-[138px] pb-[128px] flex items-center justify-center text-center overflow-hidden'>
            <div className='w-[860px] flex flex-col items-center justify-center px-6 gap-6 z-10'>
                <h3 className='text-[#7191FF] text-[16px] font-bold font-jakarta tracking-[-0.02em]'>Leverage on Automation</h3>
                <h1 className='text-white text-[76px] font-semibold font-figtree leading-[82px] tracking-[-0.02em] px-12'>AI Models for Business Solutions </h1>
                <p className='text-white text-[22px] font-medium font-jakarta text-center leading-[38px] tracking-[-0.02em]'>Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-white rounded-[12px] px-[26px] py-3.5 font-semibold text-[18px] font-figtree text-[#05152C] cursor-pointer'>Get Started Now</motion.button>
            </div>
            <div className='absolute w-[963px] h-[963px] bg-[#0037FF] blur-[585.2px] rounded-full top-[478px]'></div>
        </div>
    )
}

export default Hero