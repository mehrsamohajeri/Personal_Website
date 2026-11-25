import { portfolioProjects, socialLinks } from "@/data/site";

const layoutClasses = [
  "",
  "mt-10 md:mt-0",
  "mt-10 lg:mt-0",
  "mt-10",
  "mt-10",
  "mt-10 ",
  "mt-10",
  "mt-10",
  "mt-10",
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full bg-[#f8f9fa] pt-24 pb-20 md:pb-24 md:pt-28"
    >
      <section className="w-full xl:container flex flex-wrap mx-auto px-5 md:px-10 xl:px-5">
        <div className="flex flex-wrap justify-center w-full">
          <h2 className="text-3xl flex justify-center w-fit p-2 rounded-md h-40px bg-[#616c5c] font-patrick text-white">
            PORTFOLIO
          </h2>
          <h3 className="text-5xl w-full flex justify-center text-center font-patrick mt-3 text-[#212529]">
            Some of my most recent projects
          </h3>
        </div>
        <div className="flex flex-wrap justify-evenly w-full mt-16">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className={`w-[100%] sm:w-[80%] md:w-[40%] lg:w-[30%] mx-1 text-center ${layoutClasses[index] ?? "mt-10"}`}
            >
              <figure className="px-2 py-6 border-2 border-[#616c5c] rounded flex flex-wrap justify-center content-center">
                <img
                  className="rounded"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="w-full my-3 font-handlee text-3xl md:text-2xl xl:text-3xl font-normal">
                  {project.title}
                </figcaption>
                <div className="w-full flex-wrap flex space-x-2 font-patrick justify-center">
                  <a
                    className="p-2 w-fit border-[2px] border-[#616c5c] bg-[#616c5c] flex justify-center items-center text-xl text-white rounded-md hover:text-[#616c5c] hover:bg-transparent duration-300"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    className="p-2 w-fit border-[2px] border-[#616c5c] bg-transparent flex justify-center items-center text-xl text-[#616c5c] rounded-md hover:text-white hover:bg-[#616c5c] duration-300"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </figure>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <a
            className="text-center text-2xl mt-16 w-fit p-2 bg-[#616c5c] text-white border-[2px] border-[#616c5c] font-patrick rounded-md hover:text-[#616c5c] hover:bg-transparent duration-300"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            See All Repositories And Projects
          </a>
        </div>
      </section>
    </section>
  );
}