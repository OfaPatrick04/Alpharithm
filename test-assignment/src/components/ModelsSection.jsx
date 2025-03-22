// ModelsSection.jsx
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classNames from "classnames";
import { motion } from "framer-motion";

// Import Images
import marketImage from "../assets/Frame 1984078106.png";
import financeImage from "../assets/Frame 1984078106 (1).png";
import analyticsImage from "../assets/Frame 1984078106 (2).png";
import contentImage from "../assets/Frame 1984078106 (3).png";
import customerImage from "../assets/Frame 1984078106 (4).png";

// Feature Data
const features = [
  {
    id: "market",
    label: "Market Prediction",
    title: "Market Prediction",
    description:
      "Use AI insights for smarter business decisions and stay competitive.",
    image: marketImage,
  },
  {
    id: "finance",
    label: "Finance",
    title: "Finance",
    description:
      "Our AI models analyze financial data for confident investments.",
    image: financeImage,
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Data Analytics",
    description:
      "Transform data into insights with AI analytics that enhance decisions.",
    image: analyticsImage,
  },
  {
    id: "content",
    label: "Content Generation",
    title: "Content Generation",
    description:
      "Create quality content easily with AI that knows your brand and audience.",
    image: contentImage,
  },
  {
    id: "customer",
    label: "Customer Support",
    title: "Customer Support",
    description: "Use AI chatbots for instant, personalized customer support.",
    image: customerImage,
  },
];

// Create Ghost Cards (for seamless preview)
const ghostFeatures = [
  features[features.length - 1],
  ...features,
  features[0],
];

const ModelsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const realIndex = (index) =>
    (index - 1 + features.length) % features.length;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    setActiveIndex(realIndex(selectedIndex));
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index + 1);
      setActiveIndex(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("settle", () => {
      const currentIndex = emblaApi.selectedScrollSnap();

      if (currentIndex === 0) emblaApi.scrollTo(features.length);
      if (currentIndex === ghostFeatures.length - 1) emblaApi.scrollTo(1);
    });
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-white text-gray-900 flex flex-col items-center pb-20 px-7">
      {/* Header */}
      <div className="text-[#22263F] py-16 text-center px-6 sm:px-12 lg:px-0 w-full max-w-[860px]">
        <h2 className="text-[clamp(32px,5vw,50px)] font-semibold leading-tight tracking-[-0.02em] px-12">
          AI Models tailored for your business needs
        </h2>
        <p className="text-[clamp(18px,3vw,22px)] text-[#828282] font-medium mt-4 leading-[1.7]">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center flex-wrap gap-3 mt-6 border border-[#E4E4E7] rounded-xl p-2">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            onClick={() => scrollTo(index)}
            className={classNames(
              "px-3.5 py-1.5 rounded-lg font-semibold text-[14px] sm:text-[16px] hover:text-[#03217f] duration-300 cursor-pointer",
              activeIndex === index
                ? "bg-[#03217F] text-white shadow-lg hover:text-white"
                : "text-[#A7A7A7]"
            )}
          >
            {feature.label}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <div
        className="relative w-full overflow-x-hidden mt-12 pt-10"
        ref={emblaRef}
      >
        <div className="flex">
          {ghostFeatures.map((feature, index) => (
            <div
              key={`${feature.id}-${index}`}
              className={`min-w-[90%] overflow-hidden sm:min-w-[66%] transition-transform duration-700 ease-in-out ${realIndex(index) === activeIndex
                  ? "opacity-100 translate-y-[-30px]"
                  : "scale-90 opacity-60"
                }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between bg-[#F6FAF3] rounded-lg p-6 sm:p-8">
                {/* Text Section */}
                <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#828282]">
                    {feature.title}
                  </h2>
                  <p className="text-[#22263F] font-semibold text-[clamp(28px,4vw,42.9px)] leading-[1.2]">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#03217F] p-2 cursor-pointer sm:p-3 border border-[#22263F] rounded-md text-white mt-4 w-[120px]">
                    Learn More
                  </motion.button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-contain rounded-lg md:mr-[-55px] md:mb-[-40px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsSection;
