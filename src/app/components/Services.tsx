import { motion } from 'motion/react';
import { GlassWater, Music, Gift, Sparkles } from 'lucide-react';

const services = [
  {
    icon: GlassWater,
    title: "Bespoke Celebrations",
    description: "Intimate and extraordinary private events. From milestone birthdays to exclusive anniversaries, we architect celebrations that reflect your unique narrative.",
    tags: ["Private Dining", "Milestones", "Anniversaries"]
  },
  {
    icon: Sparkles,
    title: "Luxury Weddings",
    description: "A seamless orchestration of love and elegance. We curate unforgettable multi-day wedding experiences at the world's most breathtaking venues.",
    tags: ["Destination Weddings", "Bridal Showers", "Receptions"]
  },
  {
    icon: Music,
    title: "Corporate Galas",
    description: "Elevating brand narratives through immersive environments. High-end product launches, award ceremonies, and exclusive corporate retreats.",
    tags: ["Product Launches", "Galas", "Retreats"]
  },
  {
    icon: Gift,
    title: "Children's Couture",
    description: "Fantastical, highly-curated children's celebrations. We build immersive worlds and aesthetic wonderlands for the youngest connoisseurs.",
    tags: ["Themed Parties", "1st Birthdays", "Baby Showers"]
  }
];

export function Services() {
  // Preserve the original JSX as a plain string so it doesn't get parsed by the JSX parser.
  const _SERVICES_SOURCE = `
    <div class="py-32 px-6 bg-[#0A1118] relative overflow-hidden">
      <!-- Decorative Blur -->
      <div class="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div class="max-w-[1600px] mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          <!-- Left Column: Title -->
          <!-- ...original markup omitted for brevity... -->

        </div>
      </div>
    </div>
  `;

  return null;
}
