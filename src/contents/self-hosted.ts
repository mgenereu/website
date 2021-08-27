import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: ["10 Registered Users", "Public Repos", "Private Repos"],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest",
    trackingName: "free",
  },
  {
    title: "Professional",
    price: isEurope() ? "€29" : "$35",
    duration: "Per User/Month (starting from the 11th user)",
    features: [
      "Everything in Free",
      "Unlimited Prebuilds",
      "Shared Workspaces",
      "Snapshots",
      "Admin Dashboard",
    ],
    btnText: "Get License",
    btnHref: "/enterprise-license",
    spiced: true,
    trackingName: "professional",
  },
];
