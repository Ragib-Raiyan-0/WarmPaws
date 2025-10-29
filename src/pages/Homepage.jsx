import React from "react";
import HeroSwiper from "./Heroswiper";

// Winter care tips
const winterTips = [
  {
    id: 1,
    title: "Protect Paws",
    description: "Apply pet-safe balms to keep paws soft and safe from the cold.",
    icon: "🐾",
  },
  {
    id: 2,
    title: "Cozy Bedding",
    description: "Provide warm blankets for a snug sleep during chilly nights.",
    icon: "🛏️",
  },
  {
    id: 3,
    title: "Healthy Diet",
    description: "Adjust meals for extra energy and warmth during winter.",
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
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-pink-50">
      {/* Hero slider */}
      <HeroSwiper />

      {/* Popular Winter Care Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">
          Winter Care for Your Pets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winterTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300 border-2 border-orange-100"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">{tip.title}</h3>
              <p className="text-orange-800/90 text-sm mb-4">{tip.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Expert Vets */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white/50 rounded-3xl mx-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-12">
          Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertVets.map((vet) => (
            <div
              key={vet.id}
              className="bg-white rounded-3xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300 border-2 border-green-100"
            >
              <div className="text-6xl mb-4">{vet.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">{vet.name}</h3>
              <p className="text-green-800/90 text-sm mb-4">{vet.specialty}</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                Contact Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-pink-50 text-orange-600 font-semibold shadow-inner mt-16">
        <div className="max-w-6xl mx-auto">
          <p>
            Developed by <span className="font-bold text-orange-500">WarmPaws Team</span>
          </p>
          <p className="text-sm mt-2 text-orange-400">
            Keeping your pets cozy, safe, and happy all winter long
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
