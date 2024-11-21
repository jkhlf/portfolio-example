import React from 'react';
import { Mail, Linkedin, Github, Code, Coffee, Dumbbell, Terminal } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <div className="flex items-center gap-8">
          <div className="w-1/3">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fcool-anime-boy-pfp-hotaro-oreki-ejrnayvw61coeizn.jpg&f=1&nofb=1&ipt=f16196e12e668ed8b9318de07977786f71818a328885a2544c27068338de3dfd&ipo=images" alt="Professional profile picture" className="w-full rounded-lg shadow-md" />
          </div>

          <div className="w-2/3">
            <h1 className="text-2xl font-semibold mb-4">
              Hello there!
            </h1>
            <p className="text-1xl mb-8">
              Always trying to learn a little bit of everything. I think my career will go into Backend Development or Data Analysis because I really enjoy studying these areas. At the moment, I'm studying Java, Spring and exploring frameworks like Next.js for the frontend.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed mb-4 text-1xl">
          Focusing on backend applications with Java using frameworks like Spring and Node.js with Express, and maybe one day I'll start learning Go or Rust.  </p>
        <p className="leading-relaxed text-1xl">
          I’m Brazilian, currently living in São Paulo. </p>
      </section>
    </div>
  );
};

export default About;