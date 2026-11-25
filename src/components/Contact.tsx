import { socialLinks } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#616c5c] pt-24 pb-20 md:pb-24 md:pt-28"
    >
      <section className="w-full xl:container flex flex-wrap mx-auto px-5 md:px-10 xl:px-5">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-[45%] text-center lg:text-start">
            <h2 className="mb-2 text-4xl font-patrick text-[#212529] font-semibold">
              Let&apos;s get in touch
            </h2>
            <p className="mb-5 font-handlee text-[#212529] text-2xl text-center lg:text-justify">
              If you’re looking for a Frontend Developer who combines a love for
              solving problems with a genuine passion for collaborative work,
              let’s connect. I’m excited to bring my skills and energy to your
              next exciting project. Please share as much info as possible, so we
              can get the most out of our first catch-up.
            </p>
            <h2 className="mb-2 text-4xl font-patrick text-[#212529] font-semibold">
              Email:
            </h2>
            <a
              href="mailto:contact@mehrsamohajeri.com"
              className="mb-5 font-handlee text-[#212529] text-2xl text-center lg:text-start"
            >
              <p className="mb-5 font-handlee text-[#212529] text-2xl text-center lg:text-start">
                contact[at]mehrsamohajeri.com
              </p>
            </a>
            <h2 className="mb-2 text-4xl font-patrick text-[#212529] font-semibold">
              Call:
            </h2>
            <a href="tel:+989398513755">
              <p className="mb-5 font-handlee text-[#212529] text-2xl text-center lg:text-start">
                +98 939 851 3755
              </p>
            </a>
            <h2 className="mb-2 text-4xl font-patrick text-[#212529] font-semibold">
              Living:
            </h2>
            <p className="mb-5 font-handlee text-[#212529] text-2xl text-center lg:text-start">
              Tehran, Iran
            </p>
            <ul className="flex flex-nowrap justify-center lg:justify-start mt-8">
              <li className="mx-2 lg:ml-0 duration-300 hover:scale-[1.2]">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mehrsa Mohajeri on LinkedIn"
                >
                  <i className="text-2xl text-[#212529] bi bi-linkedin hover:text-[#0d62bc] duration-300" />
                </a>
              </li>
              <li className="mx-2 duration-300 hover:scale-[1.2]">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mehrsa Mohajeri on GitHub"
                >
                  <i className="text-2xl text-[#212529] bi bi-github hover:text-black duration-300" />
                </a>
              </li>
              <li className="mx-2 duration-300 hover:scale-[1.2]">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mehrsa Mohajeri on Instagram"
                >
                  <i className="text-2xl text-[#212529] bi bi-instagram hover:text-[#bc1888] duration-300" />
                </a>
              </li>
              <li className="mx-2 duration-300 hover:scale-[1.2]">
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mehrsa Mohajeri on Telegram"
                >
                  <i className="text-2xl text-[#212529] bi bi-telegram hover:text-[#3286ab] duration-300" />
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[48%] ml-auto mt-10 lg:mt-0">
            <h2 className="text-center lg:text-start mb-10 lg:mb-5 text-4xl font-patrick text-[#212529] font-semibold">
              Estimate your Project?
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
}