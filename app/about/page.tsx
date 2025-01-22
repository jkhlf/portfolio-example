import React from 'react';
import { Mail, Linkedin, Github, Code, Coffee, Dumbbell, Terminal } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-14">
        <div className="flex items-center gap-8">
          <div className="w-1/3">
            <img src="https://via.placeholder.com/150" alt="Profile picture" className="w-full rounded-lg shadow-md" />
          </div>

          <div className="w-2/3">
            <h1 className="text-2xl font-semibold mb-4">
              Hello there!
            </h1>
            <p className="text-1xl mb-8">
              This is an example text for the introduction section. You can replace it with your own content.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="leading-relaxed mb-4 text-1xl">
          This is an example text for the about section. You can replace it with your own content.
        </p>
        <p className="leading-relaxed text-1xl">
          This is another example text for the about section. You can replace it with your own content.
        </p>
      </section>
    </div>
  );
};

export default About;