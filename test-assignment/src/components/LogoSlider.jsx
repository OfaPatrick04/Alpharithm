import { motion } from "framer-motion";
import company1 from "../assets/Company logo (4).png";
import company2 from "../assets/Company logo (3).png";
import company3 from "../assets/Company logo.png";
import company4 from "../assets/Company logo (1).png";
import company5 from "../assets/Company logo (2).png";

const partners = [
  { name: "Layers", logo: company1 },
  { name: "Sispyhus", logo: company2 },
  { name: "Circooles", logo: company3 },
  { name: "Catalog", logo: company4 },
  { name: "Quotie", logo: company5 },
];

const LogoSlider = () => {
  return (
    <div className="bg-white py-6 space-y-8 overflow-hidden">
      {/* Title */}
      <p className="text-center text-[16px] text-[#667085] font-medium font-jakarta">
        Join 4,000+ companies already growing
      </p>

      {/* Infinite Scroll Animation */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-12"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate the logos for smooth loop */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center space-x-2 min-w-[150px]">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 object-fill"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
