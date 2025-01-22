import Link from "next/link";

const footerItems = {
  'https://github.com/': {
    name: 'Github',
  },
  'https://www.linkedin.com/in/yourprofile': {
    name: 'Linkedin',
  },
};

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col pt-20 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          
          {/* Texts */}
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Company/Name
            </p>
            <a
              href="/cv/Curriculo.pdf" target="_blank"
              className="bg-zinc-950 border border-solid border-b-inherit p-3 text-zinc-100 flex items-center gap-4 hover:bg-zinc-700 transition-all active:translate-y-1 mt-4"
            >
              Download my CV
            </a>
          </div>

          {/* Links */}
          <ul className="flex flex-col md:items-end md:w-1/2">
            {Object.entries(footerItems).map(([path, { name }]) => (
              <li key={path} className="mb-2">
                <Link
                  href={path}
                  className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 py-1 gap-3'
                >
                  <ArrowIcon />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
