import { navItems, socialLinks } from "@/data/site";
import { MobileNav } from "./MobileNav";

const socialIconClass =
  "bi text-[#212529] duration-300";

export function Header() {
  return (
    <header className="h-[80px] w-full bg-white flex flex-wrap justify-center px-5 md:px-10 xl:px-5 fixed z-30">
      <section className="xl:container w-full flex flex-wrap items-center bg-white">
        <a href="#" className="w-[50%] lg:w-[25%]">
          <figure>
            <img
              className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[90%]"
              src="/Image/logo.webp"
              alt="Mehrsa Mohajeri"
            />
          </figure>
        </a>
        <nav className="w-[50%] hidden lg:flex" aria-label="Main navigation">
          <ul className="flex flex-wrap w-full justify-center content-center space-x-8 uppercase">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="w-fit flex justify-center after-hover hover:after:duration-300 after:rounded-sm"
              >
                <a
                  href={item.href}
                  className="w-fit text-[#212529] font-patrick text-xl font-semibold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-[50%] lg:w-[25%] flex flex-wrap justify-end space-x-3 lg:space-x-4 text-xl items-center">
          <MobileNav />
          <a
            href={socialLinks.linkedin}
            className="duration-300 hover:scale-[1.2]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mehrsa Mohajeri on LinkedIn"
          >
            <i
              className={`bi bi-linkedin hover:text-[#0d62bc] ${socialIconClass}`}
            />
          </a>
          <a
            href={socialLinks.github}
            className="duration-300 hover:scale-[1.2]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mehrsa Mohajeri on GitHub"
          >
            <i className={`bi bi-github hover:text-black ${socialIconClass}`} />
          </a>
          <a
            href={socialLinks.instagram}
            rel="follow noopener noreferrer"
            className="duration-300 hover:scale-[1.2]"
            target="_blank"
            aria-label="Mehrsa Mohajeri on Instagram"
          >
            <i
              className={`bi bi-instagram hover:text-[#bc1888] ${socialIconClass}`}
            />
          </a>
        </div>
      </section>
    </header>
  );
}