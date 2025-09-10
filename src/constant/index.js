import image1 from "@assets/images/what1.png";
import image2 from "@assets/images/what2.png";

import how1 from "@assets/images/Request RMB 1.svg";
import how2 from "@assets/images/Dashboard-Shipping Address.svg";
import how3 from "@assets/images/Track Shipment Complete.svg";

import whoitfor1 from "@assets/images/whoitfor1.svg";
import whoitfor2 from "@assets/images/whoitfor2.svg";

import review1 from "@assets/images/importer.png";
import review2 from "@assets/images/payment.png";

import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import keyfeature from "@assets/images/keyfeatures.png";
import transparent from "@assets/images/transparent.png";
export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about-us" },
  { id: 3, name: "FAQs", href: "/faqs" },
  { id: 4, name: "Blog", href: "/blog" },
];

export const whatYouCando = [
  {
    id: 1,
    title: "Local Currency Payments",
    text: "Pay your suppliers directly in your local currency — fast, secure, and without hidden fees.",
    image: image1,
    href: "/payment",
  },
  {
    id: 2,
    title: "Logistics Management",
    text: "Ship from China to Nigeria with confidence: reliable timelines, transparent tracking, and no surprise costs.",
    image: image2,
    href: "/logistics",
  },
];

export const howItWorksPayment = [
  {
    id: 1,
    title: "Input RMB Amount",
    text: "Input how much you want to pay.",
    image: how1,
  },
  {
    id: 2,
    title: "Add Supplier Details",
    text: "Submit your supplier account information.",
    image: how2,
  },
  {
    id: 3,
    title: "Pay in Local Currency",
    text: "We convert and pay your supplier instantly and securely.",
    image: how3,
  },
];

export const howItWorksLogistics = [
  {
    id: 1,
    title: " Book Shipment",
    text: "Enter your cargo details.",
    image: how1,
  },
  {
    id: 2,
    title: "Choose Method",
    text: "Air, sea, or consolidated cargo—your call.",
    image: how2,
  },
  {
    id: 3,
    title: "Confirm & Track",
    text: "Relax while we handle the rest from China until it reaches your door.",
    image: how3,
  },
];
export const navOptions = [
  {
    id: 1,
    name: "💳 Payments",
  },
  {
    id: 2,
    name: "🚚 Logistics",
  },
  {
    id: 3,
    name: "🛍️ Shopping",
  },
  {
    id: 4,
    name: "📲 App Usage",
  },
];
export const faqs = [
  {
    id: 1,
    question: "Can I track my shipment?",
    answer: "Yes, every item you order comes with real-time tracking updates.",
  },
  {
    id: 2,
    question: "Can I track my shipment?",
    answer: "Yes, every item you order comes with real-time tracking updates.",
  },
  {
    id: 3,
    question: "Can I track my shipment?",
    answer: "Yes, every item you order comes with real-time tracking updates.",
  },
  {
    id: 4,
    question: "Can I track my shipment?",
    answer: "Yes, every item you order comes with real-time tracking updates.",
  },
  {
    id: 5,
    question: "Can I track my shipment?",
    answer: "Yes, every item you order comes with real-time tracking updates.",
  },
];
export const whoItFor = [
  {
    id: 1,
    title: "SME Importers",
    text: "Save money, simplify processes, and import with confidence.",
    image: whoitfor1,
  },
  {
    id: 2,
    title: "Corporate Importers",
    text: "Gain speed, transparency, and full control to scale globally.",
    image: whoitfor2,
  },
];

export const whyChoose = [
  {
    question: "Payment timing",
    answer: "In 5 minutes.",
  },
  {
    question: "Shipment tracking",
    answer: "Always.",
  },
  {
    question: "Insurance and customs clearance included",
    answer: "Absolutely.",
  },
  {
    question: "Payment security",
    answer: "Our priority.",
  },
  {
    question: "Goods Consolidation",
    answer: "Definitely!",
  },
  {
    question: "Hidden fees",
    answer: "Never.",
  },
  {
    question: "After-service support",
    answer: "That’s us.",
  },
  {
    question: "Built for African trade",
    answer: "100%.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Abdulbaki Shuaib",
    position: "CEO, company",
    review:
      "After using various shipping services, I can confidently say that Procurify is unparalleled in its efficiency and user-friendly interface. I highly recommend it!",
    rating: 3.5,
    image: review1,
  },
  {
    id: 2,
    name: "Abdulbaki Shuaib",
    position: "CMO, company",
    review:
      "As a freelancer, I appreciate how Procurify simplifies transactions by allowing payments in RMB. It streamlines my workflow and makes managing finances much easier.",
    rating: 3.5,
    image: review2,
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaXTwitter,
    href: "/",
  },
  {
    id: 2,
    icon: AiFillInstagram,
    href: "/",
  },
  {
    id: 3,
    icon: FaFacebook,
    href: "/",
  },
  {
    id: 4,
    icon: FaLinkedin,
    href: "/",
  },
];

export const keyFeatures = [
  {
    id: 1,
    title: "Real-time RMB exchange",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
  {
    id: 2,
    title: "Fund with local bank transfer",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
  {
    id: 3,
    title: "Instant confirmation of RMB balance",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
];

export const keyFeaturesLogistics = [
  {
    id: 1,
    title: "Local and international delivery",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
  {
    id: 2,
    title: "Real-time shipment tracking",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
  {
    id: 3,
    title: "Bulk or individual item shipping",
    text: "Shop for items and initiate RMB payment requests right from the app.",
    image: keyfeature,
  },
];

export const paymentWhyChoose = [
  {
    id: 1,
    title: "For Everyday Shoppers",
    text: "Easily buy goods from trusted merchants, without hidden stress.",
    image: transparent,
  },
  {
    id: 2,
    title: "For Everyday Shoppers",
    text: "Easily buy goods from trusted merchants, without hidden stress.",
    image: transparent,
  },
  {
    id: 3,
    title: "For Everyday Shoppers",
    text: "Easily buy goods from trusted merchants, without hidden stress.",
    image: transparent,
  },
  {
    id: 4,
    title: "For Everyday Shoppers",
    text: "Easily buy goods from trusted merchants, without hidden stress.",
    image: transparent,
  },
];

export const widget = [
  {
    id: 1,
    image: "",
    height: "250px",
  },
  {
    id: 2,
    image: "",
    height: "250px",
  },
  {
    id: 3,
    image: "",
    height: "516px",
  },
  {
    id: 4,
    image: "",
    height: "516px",
  },
  {
    id: 5,
    image: "",
    height: "300px",
  },
  {
    id: 6,
    image: "",
    height: "200px",
  },
  {
    id: 7,
    image: "",
    height: "230px",
  },
  {
    id: 8,
    image: "",
    height: "270px",
  },
];
