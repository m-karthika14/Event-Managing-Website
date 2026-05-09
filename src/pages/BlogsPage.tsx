import React from 'react';
import { Footer } from '../app/components/Footer';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-white">
      <div className="max-w-[1200px] mx-auto py-24 px-6">
        <h1 className="text-4xl font-semibold mb-8">Blogs</h1>
        <p className="text-[#94A3B8]">Coming soon — our thoughts, events, and design notes.</p>
      </div>
      <Footer />
    </div>
  );
}
