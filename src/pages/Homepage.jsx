import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// Simple Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSwiper from "./Heroswiper";


const heroSlides = [
  {
    id: 1,
    image: "https://png.pngtree.com/thumb_back/fh260/background/20240223/pngtree-happy-pet-dogs-playing-in-a-park-image_15629884.jpg",
    title: "WarmPaws",
    description: "Cozy outfits for your furry friends!",
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1059650734/photo/happy-smiling-young-golden-retriever-dog-under-light-gray-plaid-pet-warms-under-a-blanket-in.jpg?s=612x612&w=0&k=20&c=jdyuWKX_m0EqMhAK8oUw4MqBogPJF078B4LaXNXd_0M=",
    title: "Stay Warm",
    description: "Explore winter essentials for pets.",
  },
  {
    id: 3,
    image: "https://as2.ftcdn.net/jpg/01/11/44/17/1000_F_111441747_BcTVuZIRgd196lUFYttbZM7q58Rfop5q.jpg",
    title: "Happy Pets",
    description: "Keep your pets safe and happy.",
  },
];

// Winter care tips
const winterTips = [
  {
    id: 1,
    title: "Keep Paws Protected",
    description: "Use pet-safe balms to prevent cracked paws from cold weather.",
    icon: "🐾",
  },
  {
    id: 2,
    title: "Warm Bedding",
    description: "Provide cozy blankets to keep your pet warm at night.",
    icon: "🧣",
  },
  {
    id: 3,
    title: "Balanced Diet",
    description: "Adjust food intake to maintain energy in colder months.",
    icon: "🍲",
  },
];

// Expert vets
const expertVets = [
  {
    id: 1,
    name: "Dr. Jane Paws",
    specialty: "Veterinary Medicine",
    icon: "👩‍⚕️",
  },
  {
    id: 2,
    name: "Dr. Max Bark",
    specialty: "Pet Nutrition",
    icon: "👨‍⚕️",
  },
  {
    id: 3,
    name: "Dr. Bella Whiskers",
    specialty: "Grooming Specialist",
    icon: "👩‍⚕️",
  },
];

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-100 to-purple-200">
      <HeroSwiper/>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-10">
          Popular Winter Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winterTips.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-purple-900 text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-purple-800/90 text-sm mb-4">
                {service.description}
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Winter Care Tips ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white/50 rounded-3xl mx-6">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-10">
          Winter Care Tips for Pets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winterTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 border-2 border-purple-100"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="font-bold text-purple-900 text-xl mb-2">
                {tip.title}
              </h3>
              <p className="text-purple-800/90 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Meet Our Expert Vets ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-10">
          Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertVets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{vet.icon}</div>
              <h3 className="font-bold text-purple-900 text-xl mb-2">
                {vet.name}
              </h3>
              <p className="text-purple-800/90 text-sm mb-4">{vet.specialty}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                Contact Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="text-center py-8 bg-green-50 text-purple-900 font-semibold shadow-inner mt-16">
        <div className="max-w-6xl mx-auto">
          <p>Developed by <span className="font-bold text-purple-600">WarmPaws Team</span></p>
          <p className="text-sm mt-2 text-purple-700">Keeping your pets warm and happy this winter</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;