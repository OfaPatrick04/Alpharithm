// data/features.js

import marketImage from "./assets/Frame 1984078106.png";
import financeImage from "./assets/Frame 1984078106 (1).png";
import analyticsImage from "./assets/Frame 1984078106 (2).png";
import contentImage from "./assets/Frame 1984078106 (3).png";
import customerImage from "./assets/Frame 1984078106 (4).png";

export const features = [
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

// Include ghost cards for carousel looping
export const ghostFeatures = [
  features[features.length - 1], // Last feature before first
  ...features,
  features[0], // First feature after last
];
