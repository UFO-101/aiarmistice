import React from 'react';
import { Shield } from 'lucide-react';

const AIArmisticeWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-950 to-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center gap-6 mb-6">
            <Shield className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">AI Armistice Project</h1>
          </div>
          <p className="text-2xl text-blue-200 max-w-2xl">Building Consensus for Common Sense AI Safety</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Goal Section */}
        <section className="py-24 border-b border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gray-900 to-blue-950 p-12 rounded-xl border border-gray-800">
              <p className="text-2xl md:text-3xl leading-relaxed text-blue-200 font-light">
                For AI companies to sign an armistice, stating that they are willing to slow development of AI until we have strong guarantees that it does not risk human extinction, if other companies also agree.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 border-b border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8">Who We Are & What We Do</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            We are an intellectually diverse, bi-partisan group united by our concern about AI safety. Our activities include:
          </p>
          <div className="space-y-6 max-w-3xl">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">Community Engagement</h3>
              <div className="flex gap-8">
                <span className="text-gray-300">Flyering + putting up posters</span>
                <span className="text-gray-300">Public talks</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">Advocacy</h3>
              <div className="flex gap-8">
                <span className="text-gray-300">Petitions</span>
                <span className="text-gray-300">Social media engagement</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">Community Building</h3>
              <div className="flex gap-8">
                <span className="text-gray-300">Reading and discussion groups</span>
                <span className="text-gray-300">Community socials</span>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-16 border-b border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8">Our Manifesto</h2>
          <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-8 rounded-xl border border-gray-800">
            <ol className="space-y-6">
              {[
                "There is a 10% or greater chance AI will cause human extinction once it greatly surpasses human level.",
                "There is a 10% or greater chance AI greatly surpasses human level in the next 10 years.",
                "AI companies are locked in a race to create superintelligent AI. This is dangerous for everyone."
              ].map((point, index) => (
                <li key={index} className="flex gap-6">
                  <span className="text-3xl font-bold text-blue-400">{index + 1}</span>
                  <p className="text-xl text-gray-300 leading-relaxed pt-1">{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 border-b border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8">Our Philosophy</h2>
          <div className="space-y-8 max-w-3xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              This is a temporary project that exists to serve a single goal. We are ready to shut the project down at any time if we change our minds about the risk or when the goal is achieved.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are an intellectually diverse, bi-partisan group, united by our belief in the 3 points of the manifesto. We welcome almost any person or group that shares these views. Collaborating with another group or person does not mean that we endorse or reject their other views.
            </p>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 border-b border-gray-800">
          <div className="bg-gradient-to-r from-blue-950 to-gray-900 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get Involved</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Join us in building a safer future for artificial intelligence. Together, we can make a difference.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Join Our Movement
            </button>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-blue-950 p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 opacity-75" />
                <h3 className="text-lg font-semibold text-white mb-1">Team Member {i}</h3>
                <p className="text-gray-400">Position</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <p className="text-lg text-gray-300">The AI Armistice Project</p>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIArmisticeWebsite;