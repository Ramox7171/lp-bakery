import {
  Croissant, 
  Truck, 
  Timer, 
  ShieldCheck, 
  ShoppingCart, 
  Leaf,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Our Breads", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export interface Testimonial {
  user: string;
  location: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    user: "John Doe",
    location: "New York, NY",
    image: user1,
    text: "Fresh bread delivered to my door every morning! It has completely changed my breakfast routine.",
  },
  {
    user: "Jane Smith",
    location: "San Francisco, CA",
    image: user2,
    text: "The variety and quality of the bread are amazing. I love the sourdough and the whole grain options!",
  },
  {
    user: "David Johnson",
    location: "Austin, TX",
    image: user3,
    text: "Reliable and delicious! The smell of freshly baked bread in the morning is unbeatable.",
  },
  {
    user: "Emily Davis",
    location: "Chicago, IL",
    image: user4,
    text: "I used to rush to the bakery every morning, but now I get artisanal bread delivered straight to me.",
  },
  {
    user: "Michael Wilson",
    location: "Seattle, WA",
    image: user5,
    text: "Saves me time and always tastes fresh. Highly recommend this service to all bread lovers!",
  },
  {
    user: "Ronee Brown",
    location: "Denver, CO",
    image: user6,
    text: "Great service and delicious bread. I love that they offer organic and gluten-free options too!",
  },
];

export interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <Croissant />,
    text: "Freshly Baked Daily",
    description: "Our bread is made fresh every morning using high-quality ingredients and traditional baking methods.",
  },
  {
    icon: <Truck />,
    text: "Convenient Delivery",
    description: "Enjoy warm, fresh bread delivered straight to your doorstep at your preferred time.",
  },
  {
    icon: <Timer />,
    text: "Subscription Flexibility",
    description: "Choose your delivery frequency—daily, weekly, or bi-weekly—according to your needs.",
  },
  {
    icon: <ShieldCheck />,
    text: "Quality Ingredients",
    description: "We use organic, locally sourced ingredients with no preservatives or artificial additives.",
  },
  {
    icon: <ShoppingCart />,
    text: "Easy Online Ordering",
    description: "Modify your subscription, try new flavors, or pause deliveries anytime through our easy-to-use platform.",
  },
  {
    icon: <Leaf />,
    text: "Sustainable Packaging",
    description: "Our bread is delivered in eco-friendly packaging to keep it fresh while reducing waste.",
  },
];

export interface ChecklistItem {
  title: string;
  description: string;
}

export const checklistItems: ChecklistItem[] = [
  {
    title: "Selecting the Best Ingredients",
    description: "We start by choosing high-quality, organic, and locally sourced ingredients to ensure freshness and sustainability.",
  },
  {
    title: "Natural Fermentation Process",
    description: "Our dough undergoes a slow fermentation process, enhancing flavor and texture while keeping it natural and chemical-free.",
  },
  {
    title: "Handcrafted with Care",
    description: "Each loaf is carefully shaped by hand, following traditional artisanal baking techniques for the perfect texture.",
  },
  {
    title: "Stone Oven Baking",
    description: "Baked in stone ovens for an authentic, crispy crust and soft, airy interior, bringing out the best flavors.",
  },
  {
    title: "Eco-Friendly Packaging",
    description: "We use biodegradable and recyclable packaging to keep our bread fresh while protecting the environment.",
  },
];

export interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

export const pricingOptions: PricingOption[] = [
  {
    title: "Basic",
    price: "$15",
    features: [
      "4 loaves per month",
      "Choice of classic breads",
      "Eco-friendly packaging",
    ],
  },
  {
    title: "Premium",
    price: "$25",
    features: [
      "8 loaves per month",
      "Includes specialty and artisan breads",
      "Priority morning delivery",
    ],
  },
  {
    title: "Family Plan",
    price: "$40",
    features: [
      "12 loaves per month",
      "Wide selection of flavors",
      "Free surprise seasonal loaf",
    ],
  },
];

export interface Link {
  href: string;
  text: string;
}

export const resourcesLinks: Link[] = [
  { href: "#", text: "Bread Guide" },
  { href: "#", text: "Our Ingredients" },
  { href: "#", text: "Baking Process" },
  { href: "#", text: "Sustainability" },
  { href: "#", text: "Customer Support" },
];

export const platformLinks: Link[] = [
  { href: "#", text: "Subscription Plans" },
  { href: "#", text: "Delivery Areas" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Gift a Subscription" },
  { href: "#", text: "Wholesale Orders" },
];

export const communityLinks: Link[] = [
  { href: "#", text: "Our Story" },
  { href: "#", text: "Meet the Bakers" },
  { href: "#", text: "Events & Workshops" },
  { href: "#", text: "Recipes & Tips" },
  { href: "#", text: "Join Our Community" },
];
