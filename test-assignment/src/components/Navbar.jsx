// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/Content.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Slide-in animation for the mobile menu
    const slideVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { x: "-100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    };

    return (
        <nav className="flex items-center justify-between px-[70px] pt-[40px] bg-transparent sticky top-[-100px] z-50 w-full">
            {/* Logo */}
            <img src={logo} alt="logo" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 ml-28">
                {["Models", "Pricing", "About Us", "Contact Us", "Custom Models"].map((item) => (
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={`#${item.toLowerCase()}`}
                        key={item}
                        className="text-white font-medium font-figtree text-[16px] transition-colors duration-300"
                    >
                        {item}
                    </motion.a>
                ))}
            </div>

            {/* Buttons (Desktop) */}
            <div className="hidden lg:flex space-x-[12px]">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 w-[88px] font-figtree cursor-pointer text-white text-[14px] font-medium border border-white rounded-sm"
                >
                    Login
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2.5 text-[#03061D] cursor-pointer font-figtree text-[14px] font-medium bg-white rounded-sm"
                >
                    Get Started Now
                </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={toggleMenu}>
                {isOpen ? "" : <HiMenu size={32} color="white" />}
            </button>

            {/* Mobile Navigation - Slide from Left */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideVariants}
                        className="fixed top-0 left-0 w-3/4 h-full bg-[#04142B] shadow-lg lg:hidden z-50"
                    >
                        <div className="absolute w-full h-full bg-[#0037FF] blur-[585.2px] z-10"></div>
                        <div className="flex flex-col items-start space-y-6 p-6 z-40">
                            <div className="flex items-center justify-between w-full">
                                <img src={logo} alt="" className="z-50"/>
                                <button onClick={toggleMenu} className="self-end z-50">
                                    <HiX size={32} color="white" />
                                </button>
                            </div>
                            {["Home", "Services", "About", "Pricing", "Contact"].map((item) => (
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    key={item}
                                    className="text-white font-figtree text-[16px] z-50 hover:text-teal-600 text-lg transition-colors duration-300"
                                    onClick={toggleMenu}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="flex space-x-4 pt-4 z-50">
                                <button className="px-4 py-2 text-white border border-white rounded-md">
                                    Login
                                </button>
                                <button className="px-4 py-2 text-[#03061D] bg-white rounded-md">
                                    Get Started Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
