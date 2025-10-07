// import image1 from "@assets/images/what1.png";
// import image2 from "@assets/images/what2.png";
import image1 from "@assets/images/object_payment.svg";
import image2 from "@assets/images/object_logistics.svg";

import how1 from "@assets/images/Request RMB 1.svg";
import how2 from "@assets/images/Dashboard-Shipping Address.svg";
import how3 from "@assets/images/Track Shipment Complete.svg";

import payment1 from "@assets/images/payment1.svg";
import payment2 from "@assets/images/payment2.svg";
import payment3 from "@assets/images/payment3.svg";

import whoitfor1 from "@assets/images/whoweserve1.svg";
import whoitfor2 from "@assets/images/whoweserve2.svg";

import review1 from "@assets/images/importer.png";
import review2 from "@assets/images/payment.png";

import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import keyfeature from "@assets/images/keyfeatures.png";
import transparent from "@assets/images/transparent.png";

import offer1 from "@assets/images/offer1.svg";
import offer2 from "@assets/images/offer2.svg";
import offer3 from "@assets/images/offer3.svg";
import offer4 from "@assets/images/offer4.svg";

import ceo from "@assets/images/team/ceo.jpg"
import operation from "@assets/images/team/operation.jpg"
import customer from "@assets/images/team/customer.jpg"
import designer from "@assets/images/team/designer.jpg"
import developer from "@assets/images/team/frontend.jpg"
import {
  Ri24HoursFill,
  Ri24HoursLine,
  RiBookletFill,
  RiBookmark3Fill,
  RiCakeFill,
  RiChatHeartFill,
  RiExchangeFill,
  RiExchangeFundsFill,
  RiFlashlightFill,
  RiGlobalFill,
  RiInboxArchiveFill,
  RiLightbulbFlashFill,
  RiSecurePaymentFill,
  RiStore3Fill,
  RiTimerFlashFill,
  RiTrophyFill,
  RiWalletFill,
} from "react-icons/ri";

export const ourTeam = [
  {
    id:1, 
    name: "Keefa Umar",
    role: "Chief Executive Officer",
    image: ceo
  },
    {
    id:2, 
    name: "Zhang Ciyun",
    role: "Chief Operation Officer",
    image: operation
  },
    {
    id:3, 
    name: "Muneeroh Abdulrahom",
    role: "Customer Success Officer",
    image: customer
  },
    {
    id:4, 
    name: "Shuaib Abdulbaki",
    role: "Product Designer",
    image: designer
  },
   {
    id:4, 
    name: "Abdul-Azeez Adegoke ",
    role: "Full Stack Developer",
    image: developer
  },
]
export const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About Us", href: "/about-us" },
  { id: 3, name: "FAQs", href: "/faqs" },
  { id: 4, name: "Blog", href: "/blog" },
  { id: 5, name: "Contact Us", href: "/contact-us" },
];

export const whatYouCando = [
  {
    id: 1,
    title: "Local Currency Payments",
    text: "Pay your suppliers directly in your local currency. Fast, secure, and without hidden fees.",
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
    image: payment1,
  },
  {
    id: 2,
    title: "Add Supplier Details",
    text: "Submit your supplier account information.",
    image: payment2,
  },
  {
    id: 3,
    title: "Pay in Local Currency",
    text: "We convert and pay your supplier instantly and securely.",
    image: payment3,
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
    name: "📲 App Usage",
  },
  {
    id: 4,
    name: "🛍️ Account & Security",
  },
  {
    id: 5,
    name: "❓ Support",
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
  {
    id: 3,
    name: "Chinwe Okonkwo",
    position: "Logistics Manager, TradeWorks Ltd",
    review:
      "The real-time tracking and customs clearance support have reduced our shipping delays by 40%. Procurify has transformed our supply chain operations.",
    rating: 4.5,
    image: review1,
  },
  {
    id: 4,
    name: "Fatima Ndiaye",
    position: "E-commerce Business Owner",
    review:
      "Package consolidation has cut my shipping costs in half. The transparency and 24/7 support make international trade accessible for small businesses like mine.",
    rating: 4.0,
    image: review2,
  },
  {
    id: 5,
    name: "Kwame Adetola",
    position: "Import Director, RetailChain NG",
    review:
      "The competitive exchange rates and secure payment system have saved us thousands in transaction fees. Procurify is a game-changer for African businesses trading with China.",
    rating: 5.0,
    image: review1,
  },
  {
    id: 6,
    name: "Amina Mohamed",
    position: "Supply Chain Consultant",
    review:
      "The detailed logistics reports and cargo insurance give me peace of mind. I've recommended Procurify to all my clients looking for reliable China-Africa trade solutions.",
    rating: 4.5,
    image: review2,
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaXTwitter,
    href: " https://x.com/withprocurify?s=21&t=N2fqCWy2rRGVzM08RGyqog",
  },
  {
    id: 2,
    icon: AiFillInstagram,
    href: "https://www.instagram.com/withprocurify?igsh=MWhkbjMzc3pzNGV2Mg==",
  },
  {
    id: 3,
    icon: FaFacebook,
    href: "https://facebook.com/Procurifyafrica/",
  },
  {
    id: 4,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/procurify-international-trading-ltd",
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

export const advantages = [
  {
    title: "Local Simplicity",
    description: "Pay in Naira, Cedi, or KES. We handle the RMB—zero hassle.",
    icon: RiWalletFill,
  },
  {
    title: "Fast Transactions",
    description:
      "Instant proof of payment builds supplier trust and speeds delivery.",
    icon: RiFlashlightFill,
  },
  {
    title: "Transparent Rates",
    description: "Competitive exchange rates with no surprise deductions.",
    icon: RiExchangeFill,
  },
  {
    title: "Smart Reports",
    description:
      "Export your payment history to track, plan, and share with investors.",
    icon: RiBookletFill,
  },
  {
    title: "24/7 Support",
    description: "Real people, ready whenever you need help.",
    icon: Ri24HoursLine,
  },
  {
    title: "Secure & Reliable",
    description: "Every payment protected with trusted, compliant systems.",
    icon: RiSecurePaymentFill,
  },
];

export const whatWeOffer = [
  {
    title: "Air Cargo",
    description:
      "Reliable shipping for orders—arrives in 5–7 days, with full insurance and easy tracking.",
    image: offer1,
  },
  {
    title: "Sea Cargo",
    description:
      "Affordable bulk shipping—arrives in 35–40 days, with cost-saving consolidation and simple tracking.",
    image: offer2,
  },
  {
    title: "Full Container Loading (FCL)",
    description:
      "Efficient end-to-end management for large shipments, fully insured and dependable.",
    image: offer3,
  },
  {
    title: "Special Containers",
    description:
      "Tailored solutions for refrigerated, oversized, or hazardous cargo with 24/7 support.",
    image: offer4,
  },
  {
    title: "Your cargo, always in the loop",
    description: "Ship, track, and relax—Procurify delivers.",
    image: offer1,
  },
];

export const buildForGrowth = [
  {
    id: 1,
    title: "All-in-One Logistics",
    description:
      "Freight, clearance, insurance, and delivery—everything handled in one platform.",
    icon: RiStore3Fill,
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Dedicated human support whenever you need it.",
    icon: Ri24HoursFill,
  },
  {
    id: 3,
    title: "Cargo Insurance",
    description: "Full coverage with 100% reimbursement in case of loss.",
    icon: RiBookmark3Fill,
  },
  {
    id: 4,
    title: "Logistics Reports",
    description: "Export-ready reports for smarter planning and compliance.",
    icon: RiBookletFill,
  },
  {
    id: 5,
    title: "Competitive Rates",
    description:
      "The best rates in the market—transparent, with zero hidden fees.",
    icon: RiExchangeFundsFill,
  },
  {
    id: 6,
    title: "Package Consolidation",
    description: "Combine multiple orders into one cost-efficient shipment.",
    icon: RiInboxArchiveFill,
  },
  {
    id: 7,
    title: "Smart Tracking",
    description:
      "Track your shipment in-app, by email, or SMS—real-time visibility every step of the way.",
    icon: RiTimerFlashFill,
  },
  {
    id: 8,
    title: "Fast & Reliable",
    description:
      "Optimized routes and trusted partners ensure your supply chain never slows down.",
    icon: RiFlashlightFill,
  },
];

export const ourValue = [
  {
    title: "Empowerment",
    description:
      "We give you the tools and support to grow your business and compete globally.",
    icon: RiGlobalFill,
  },
  {
    title: "Transparency",
    description:
      "No hidden surprises—everything is clear, honest, and trustworthy.",
    icon: RiCakeFill,
  },
  {
    title: "Efficiency",
    description:
      "We streamline every step so your logistics and payments are fast, simple, and reliable.",
    icon: RiLightbulbFlashFill,
  },
  {
    title: "Innovation",
    description:
      "We’re always finding smarter ways to make trade easier and help your business grow.",
    icon: RiTrophyFill,
  },
  {
    title: "Integrity",
    description:
      "You can count on us—secure payments, ethical practices, and dependable partnerships.",
    icon: RiSecurePaymentFill,
  },
  {
    title: "Collaboration",
    description:
      "We create a community where businesses like yours and suppliers succeed together.",
    icon: RiChatHeartFill,
  },
];
export const faqsPayment = [
  {
    id: 1,
    question: "How do I pay a supplier?",
    answer:
      "In the app, request RMB → enter the RMB amount → add supplier details → pay in your local currency. We convert and pay your supplier in RMB.",
  },
  {
    id: 2,
    question: "How long do payments take?",
    answer: "Payments are confirmed in under 5 minutes in normal conditions.",
  },
  {
    id: 3,
    question: "Which local currencies do you accept?",
    answer:
      "We accept major local currencies such as Naira, Cedi, and KES. (More currencies will roll out as we expand.)",
  },
  {
    id: 4,
    question: "What are your exchange rates and fees?",
    answer:
      "We offer competitive, transparent exchange rates with no hidden fees. You'll see the full rate and charges before you confirm a payment.",
  },
  {
    id: 5,
    question: "Will my supplier know I've paid?",
    answer:
      "Yes — suppliers receive confirmation when the RMB lands. You also get instant proof of payment to share.",
  },
  {
    id: 6,
    question: "Can I get a receipt or report of my payments?",
    answer:
      "Yes. Downloadable reports include receipts, exchange rates, and transaction history for expense tracking or investor reference.",
  },
  {
    id: 7,
    question: "My payment failed — what do I do?",
    answer:
      "Open a support ticket in the app and attach the payment reference. We'll investigate immediately and guide you through reversal or retry options.",
  },
];

export const faqsLogistics = [
  {
    id: 1,
    question: "Which routes do you ship to?",
    answer:
      "Our MVP covers shipments from China to Nigeria (with expansion to other African markets planned).",
  },
  {
    id: 2,
    question: "What are the delivery times?",
    answer: "Typical timings: Air: 3–7 days. Sea/Consolidation: 35–40 days.",
  },
  {
    id: 3,
    question: "Do you provide customs clearance?",
    answer:
      "Yes — we handle customs documentation and clearance so your goods move smoothly. However, local taxes remain the importer's responsibility.",
  },
  {
    id: 4,
    question: "Is my cargo insured?",
    answer:
      "Yes. We offer cargo insurance with 100% reimbursement in the event of loss (terms and conditions apply).",
  },
  {
    id: 5,
    question: "Can you consolidate multiple orders?",
    answer:
      "Yes. Consolidation bundles several small orders into one shipment to save on costs and simplify handling.",
  },
  {
    id: 6,
    question: "How do I track my shipment?",
    answer:
      "Real-time tracking is available in-app, by email, and SMS — full visibility from pickup to delivery.",
  },
  {
    id: 7,
    question: "My shipment is missing or damaged — how do I claim?",
    answer:
      "Report the issue via the app, include photos and shipment ID. We'll start an investigation and assist with the claiming and next steps.",
  },
];

export const faqsAppUsage = [
  {
    id: 1,
    question: "How do I create an account?",
    answer:
      "Download the app, tap Sign up, enter your business details, verify your phone/email, and you're ready to go.",
  },
  {
    id: 2,
    question: "Where do I find my receipts and reports?",
    answer:
      "Under Reports in the app you can download payment receipts, exchange histories, and shipment logs as exportable files.",
  },
  {
    id: 3,
    question: "What if something goes wrong in the app?",
    answer:
      "Use Support in the app to chat, email, or call. Our team is available 24/7 to resolve issues quickly.",
  },
];

export const faqsSecurity = [
  {
    id: 1,
    question: "How secure is my account?",
    answer:
      "Very secure. We use bank-grade encryption and compliance-backed transfer systems to protect payments and data.",
  },
  {
    id: 2,
    question: "How do refunds or failed payments work?",
    answer:
      "If a payment fails, we notify you immediately and follow our reversal/refund process. Contact support for case-specific help.",
  },
  {
    id: 3,
    question: "How do I reach support?",
    answer:
      "Support is available 24/7 via the app (chat), email, and phone. For urgent payment or shipment issues, use the app’s emergency contact.",
  },
];

export const faqsSupport = [
  {
    id: 1,
    question: "Is support available 24/7?",
    answer:
      "Yes. Our support team is available around the clock. For urgent payment or shipment issues, use the app's emergency contact so your case is prioritized.",
  },
  {
    id: 2,
    question: "What information should I include when I open a ticket?",
    answer:
      "Include your order or transaction ID, supplier name, screenshots (if any), and a brief description of the issue. That helps us resolve things faster.",
  },
  {
    id: 3,
    question: "How long will it take to get a response?",
    answer: "We respond as quickly as possible and prioritize urgent cases.",
  },
  {
    id: 4,
    question: "Do you offer dedicated support for large customers?",
    answer:
      "Enterprise customers may receive a dedicated account manager or priority support—contact us via WhatsApp or call to discuss options.",
  },
  {
    id: 5,
    question: "How can I give feedback or request a feature?",
    answer:
      "Submit feedback through the app's Feedback section or contact support—we collect requests and prioritize features that help our users most.",
  },
];

import desktopFrame1 from "@assets/images/gallery/frame 1.svg";
import desktopFrame2 from "@assets/images/gallery/frame 2.svg";
import desktopFrame3 from "@assets/images/gallery/frame 3.svg";
import desktopFrame4 from "@assets/images/gallery/frame 4..svg";
import desktopFrame5 from "@assets/images/gallery/frame 5..svg";
import desktopFrame6 from "@assets/images/gallery/frame 6..svg";
import desktopFrame7 from "@assets/images/gallery/frame 7..svg";
import desktopFrame8 from "@assets/images/gallery/frame 8..svg";

import mobileFrame1 from "@assets/images/gallery/mobile1.svg";
import mobileFrame2 from "@assets/images/gallery/mobile2.svg";
import mobileFrame3 from "@assets/images/gallery/mobile3.svg";
import mobileFrame4 from "@assets/images/gallery/mobile4.svg";
import mobileFrame5 from "@assets/images/gallery/mobile5.svg";
import mobileFrame6 from "@assets/images/gallery/mobile6.svg";
export const widget = [
  {
    id: 1,
    desktop: desktopFrame1,
    mobile: mobileFrame1,
    height: "250px",
  },
  {
    id: 2,
    desktop: desktopFrame2,
    mobile: mobileFrame2,
    height: "250px",
  },
  {
    id: 3,
    desktop: desktopFrame3,
    mobile: mobileFrame3,
    height: "516px",
  },
  {
    id: 4,
    desktop: desktopFrame4,
    mobile: mobileFrame4,
    height: "516px",
  },
  {
    id: 5,
    desktop: desktopFrame5,
    mobile: mobileFrame5,
    height: "300px",
  },
  {
    id: 6,
    desktop: desktopFrame6,
    mobile: mobileFrame6,
    height: "200px",
  },
  {
    id: 7,
    desktop: desktopFrame7,
    mobile: "mobileFrame7",
    height: "230px",
  },
  {
    id: 8,
    desktop: desktopFrame8,
    mobile: "mobileFrame8",
    height: "270px",
  },
];

export const footerLinksCompany = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Us",
    href: "/about-us",
  },
  {
    id: 3,
    name: "FAQs",
    href: "/faqs",
  },
    {
    id: 4,
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const footerLinksProducts = [
  {
    id: 1,
    name: "Payment",
    href: "/payment",
  },
  {
    id: 2,
    name: "Logistics",
    href: "/logistics",
  },
  {
    id: 3,
    name: "Curi",
    href: "#",
  },
  {
    id: 4,
    name: "Loyalty Program",
    href: "#",
  },
];
export const footerLinksLegal = [
  {
    id: 1,
    name: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    id: 2,
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];
