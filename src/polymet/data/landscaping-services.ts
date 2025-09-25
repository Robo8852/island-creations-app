export interface LandscapingService {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: "excavation" | "palm-trees" | "landscaping";
}

export const landscapingServices: LandscapingService[] = [
  {
    id: "excavation",
    title: "Excavation Services",
    description:
      "Professional excavation and earth moving services for residential and commercial projects.",
    features: [
      "Site preparation and grading",
      "Foundation excavation",
      "Drainage systems installation",
      "Land clearing and leveling",
      "Septic system installation",
    ],

    icon: "Truck",
    category: "excavation",
  },
  {
    id: "palm-tree-services",
    title: "Palm Tree Services",
    description:
      "Expert palm tree installation, maintenance, and removal services for tropical landscapes.",
    features: [
      "Palm tree installation and transplanting",
      "Professional pruning and trimming",
      "Disease diagnosis and treatment",
      "Palm tree removal and stump grinding",
      "Fertilization and pest control",
    ],

    icon: "TreePine",
    category: "palm-trees",
  },
  {
    id: "island-landscaping",
    title: "Island-Style Landscaping",
    description:
      "Create stunning tropical landscapes that capture the beauty and essence of island living.",
    features: [
      "Tropical garden design and installation",
      "Native plant selection and placement",
      "Irrigation system design",
      "Hardscape and pathway installation",
      "Outdoor living space creation",
    ],

    icon: "Palmtree",
    category: "landscaping",
  },
  {
    id: "maintenance",
    title: "Landscape Maintenance",
    description:
      "Comprehensive maintenance services to keep your tropical paradise looking pristine year-round.",
    features: [
      "Regular lawn care and mowing",
      "Seasonal plant care and pruning",
      "Irrigation system maintenance",
      "Fertilization programs",
      "Pest and weed control",
    ],

    icon: "Scissors",
    category: "landscaping",
  },
  {
    id: "hardscaping",
    title: "Hardscaping & Stonework",
    description:
      "Beautiful stone work and hardscaping to complement your tropical landscape design.",
    features: [
      "Retaining wall construction",
      "Patio and walkway installation",
      "Water feature design and installation",
      "Outdoor kitchen and fire pit construction",
      "Decorative stone and rock placement",
    ],

    icon: "Mountain",
    category: "landscaping",
  },
  {
    id: "consultation",
    title: "Design Consultation",
    description:
      "Professional landscape design consultation to bring your tropical vision to life.",
    features: [
      "Site analysis and planning",
      "Custom landscape design",
      "Plant selection guidance",
      "Project timeline and budgeting",
      "Permit assistance and coordination",
    ],

    icon: "Compass",
    category: "landscaping",
  },
];

export const companyInfo = {
  name: "Island Creations",
  tagline: "Quality And Affordability",
  description:
    "Island Creations is your premier tropical landscaping partner, specializing in excavation services, palm tree care, and authentic island-style landscape design. We bring the beauty and tranquility of tropical paradise to your property with professional expertise and affordable solutions.",
  specialties: [
    "Excavation & Earth Moving",
    "Palm Tree Services",
    "Island-Style Landscaping",
    "Tropical Garden Design",
    "Hardscaping & Stonework",
  ],

  contact: {
    phone: "(555) 123-PALM",
    email: "info@islandcreations.com",
    address: "123 Tropical Way, Paradise Island, FL 33101",
    hours: "Monday - Saturday: 7:00 AM - 6:00 PM",
  },
};
