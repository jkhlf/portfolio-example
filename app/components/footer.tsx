import Link from "next/link";

const footerItems = {
  'https://github.com/jkhlf': {
    name: 'Github',
  },
  'https://www.linkedin.com/in/joaokhalaf': {
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
    <footer className="flex flex-col pt-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        
        {/* Textos */}
        <div className="flex flex-col">
          <div>
          <p className=" text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Khalaf
          </p>
          </div>
          <div className="flex flex-col mb-24">
            <a
              href="/cv/Curriculo.pdf" target="_blank"
              className="bg-zinc-950 border solid border-b-inherit p-3 text-zinc-100 flex items-center gap-4 hover:bg-zinc-700 transition-all active:tranzinc-y-1 mt-16"
            >
              Download my CV
            </a>
          </div>
        </div>

        {/* Links */}
        <ul className="flex flex-col md:items-end md:w-1/2 md:mt-0">
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
    </footer>
  );
}
