import { BotMessageSquare, MessageSquareCode, SaveAll, SlidersHorizontal } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import { Terminal } from "lucide-react";
import { Code2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text:
      "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text:
      "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text:
      "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text:
      "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text:
      "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text:
      "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Code2 />,
    text: "Real-time Code Collaboration",
    description:
      "A collaborative code editor (similar to VS Code, Replit, or Google Docs) where users can write, edit, and view code simultaneously.",
  },
  {
    icon: <Terminal />,
    text: "Integrated Compiler & Interpreter",
    description:
      "Support for compiling and executing multiple programming languages (Java, Python, JavaScript, C++, etc.) within the browser.",
  },
  {
    icon: <ShieldHalf />,
    text: "User Authentication & Security",
    description:
      "Allow users to create accounts or log in using credentials, also the code written are end to end encrypted.",
  },
  {
    icon: <SlidersHorizontal />,
    text: "Room Management and Access Control",
    description:
      "Users can create rooms with unique identifiers and set permissions (e.g., private or public rooms).",
  },
  {
    icon: <MessageSquareCode />,
    text: "Real-time Chat System",
    description:
      "A real-time chat system for users in the same room to discuss, ask questions, and share feedback.",
  },
  {
    icon: <SaveAll />,
    text: "File Saving",
    description:
      "Save your all valuable codes!",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const aboutUs = [
  {
    title: "Welcome to CodeConnect",
    description:
      "At CodeConnect, we are revolutionizing the way developers collaborate. Our platform allows multiple users to code together in real-time, chat, and share ideas by either creating their own room or joining existing ones. Whether you're building a new project, debugging code, or brainstorming with peers, CodeConnect is designed to make coding more interactive, efficient, and fun.",
  },
  {
    title: "Why We Built This",
    description:
      "We know that coding is often a team effort, and great ideas emerge when people come together. But in today’s world, finding the right tools to collaborate remotely can be challenging. That’s why we built [Website Name]: to provide developers with a seamless, real-time environment for coding and communication.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower developers to collaborate more effectively, whether they’re working on solo projects or large-scale team efforts. We aim to build a community where coders of all levels can learn from each other, share knowledge, and create amazing projects together.",
  },
  {
    title: "Join Us!",
    description:
      "Are you ready to take your coding collaboration to the next level? Join us at [Website Name] and experience a new way of coding, chatting, and creating together!",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
