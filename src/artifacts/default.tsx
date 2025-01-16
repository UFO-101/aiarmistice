import { Github, Linkedin, Shield, Twitter } from 'lucide-react';

const AIArmisticeWebsite = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-950 to-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <Shield className="h-12 w-12 text-blue-400" />
              <h1 className="text-4xl font-bold text-white">AI Armistice Project</h1>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="text-2xl text-blue-200 max-w-2xl">Building Consensus for Common Sense AI Safety</p>
        </div>

        {/* Navigation Menu */}
        <div className="max-w-5xl mx-auto px-6 py-4 border-t border-gray-800">
          <nav>
            <ul className="flex gap-8 text-sm">
              <li>
                <a href="#manifesto" className="text-blue-200 hover:text-blue-400 transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-blue-200 hover:text-blue-400 transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#events" className="text-blue-200 hover:text-blue-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="text-blue-200 hover:text-blue-400 transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        {/* Goal Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We call on AI companies<br />
              to sign an armistice.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section id="manifesto" className="py-16 -mt-8">
          <h2 className="text-3xl font-bold text-white mb-8">Our Manifesto</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-6 rounded-xl border border-gray-800">
              <ol className="space-y-6">
                {[
                  "There is a 10% or greater chance AI will cause human extinction once it greatly surpasses human level.",
                  "There is a 10% or greater chance AI greatly surpasses human level in the next 10 years.",
                  "AI companies are locked in a race to create superintelligent AI. This is dangerous for everyone."
                ].map((point, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-3xl font-bold text-blue-400">{index + 1}</span>
                    <p className="text-xl text-gray-300 leading-relaxed pt-1">{point}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">The Armistice</h3>
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "We, as AI companies, state that we are willing to slow development of AI until we have strong guarantees that it does not risk human extinction, if other companies also agree."
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">About the Armistice Project</h2>
          <div className="space-y-12 max-w-3xl">
            <div>
              <p className="text-xl text-gray-300">
                We are an intellectually diverse, bi-partisan group united by our concern about AI safety. We are based in London, UK, with members from all over the world.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Philosophy</h3>
              <div className="space-y-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are united by our belief in the 3 points of the manifesto. We welcome almost any person or group that shares these views. Collaborating with another group or person does not mean that we endorse or reject their other views.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This is a temporary project that exists to serve a single goal. We are ready to shut the project down at any time if we change our minds about the risk or when the goal is achieved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section - updated */}
        <section id="get-involved" className="py-16">
          <div className="bg-gradient-to-r from-blue-950 to-gray-900 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Get Involved</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto text-center">
              Join us in building a safer future for artificial intelligence. Together, we can make a difference.
            </p>

            <div className="max-w-3xl mx-auto mb-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-blue-400">Community Engagement</h3>
                <div className="flex gap-8">
                  <span className="text-gray-300">Flyering & Postering</span>
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

            <div className="text-center">
              <button className="relative inline-flex items-center justify-center px-12 py-4 text-xl font-semibold text-white transition-all duration-300 
                bg-gradient-to-r from-blue-600 to-blue-400 
                hover:from-blue-500 hover:to-blue-300
                rounded-2xl
                shadow-[0_0_20px_rgba(59,130,246,0.5)]
                hover:shadow-[0_0_25px_rgba(59,130,246,0.65)]
                transform hover:scale-105
                overflow-hidden
                group">
                <span className="relative z-10">Join us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {[
              {
                date: "April 15, 2024",
                title: "AI Safety Discussion Group",
                location: "London, UK",
                description: "Join us for an evening of discussion about the latest developments in AI safety and their implications.",
                time: "18:30 - 20:30 BST"
              },
              {
                date: "April 22, 2024",
                title: "Public Talk: The Case for an AI Armistice",
                location: "Online",
                description: "A comprehensive presentation on why we need an AI development slowdown and how it could work.",
                time: "19:00 - 20:30 BST"
              },
              {
                date: "May 1, 2024",
                title: "Community Social",
                location: "London, UK",
                description: "Meet other members of the AI Armistice Project community in an informal setting.",
                time: "18:00 - 21:00 BST"
              }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-blue-950 p-6 rounded-xl border border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/4">
                    <p className="text-blue-400 font-semibold">{event.date}</p>
                    <p className="text-gray-400">{event.time}</p>
                    <p className="text-gray-300 mt-1">{event.location}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="space-y-16">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-900 to-blue-950 p-4 rounded-xl border border-gray-800 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 opacity-75" />
                    <h3 className="text-lg font-semibold text-white mb-1">Team Member {i}</h3>
                    <p className="text-gray-400">Position</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Advisors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-900 to-blue-950 p-4 rounded-xl border border-gray-800 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 opacity-75" />
                    <h3 className="text-lg font-semibold text-white mb-1">Advisor {i}</h3>
                    <p className="text-gray-400">Affiliation</p>
                  </div>
                ))}
              </div>
            </div>
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