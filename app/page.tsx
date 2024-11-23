import { Github, Linkedin, } from 'lucide-react';


const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="20">
      <g>
        <path
          className="fill-zinc-950 dark:fill-zinc-200"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

export default function Page() {
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/joaokhalaf/"
    },
    {
      title: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/jkhlf"
    },
    {
      title: "X (Twitter)",
      icon: <XLogo />,
      url: "https://x.com/kh4lf_"
    }
  ];

  const navLinks = [
    { title: "/projects", },
    { title: "/about", }
  ];

  return (

    <><section>
      <div className="flex items-center justify-between pb-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Hello, I'm a Software Engineer         
       </h1>
        </div>
      </div>
      <div className="pb-10">
        <p className="text-gray-600 dark:text-gray-400">
        Student at Fatec RL - Sistemas para Internet, Fullstack Developer, sometimes acting as Backend Developer and sometimes Data Analyst (only studying for now).       
       </p>
      </div>
    </section>

      <div>

        {/* Social Links */}
        <div className="space-y-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center justify-between w-full p-3 border border-gray-800 rounded hover:bg-gray-400/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {link.icon}
                <span>{link.title}</span>
              </div>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </div>
      </div></>
  );
};