import {
  education,
  experiences,
  hardSkills,
  resumePdfUrl,
  softSkills,
} from "@/data/site";
import { SkillList } from "./SkillList";

function TimelineBlock({
  items,
}: {
  items: typeof experiences;
}) {
  return (
    <div className="border-s-2 border-[#616c5c] pl-3 font-handlee">
      {items.map((item, index) => (
        <div key={`${item.title}-${item.period}-${index}`}>
          <h3 className="text-2xl font-bold text-[#212529] mb-2">{item.title}</h3>
          <p className="text-[19px] md:text-xl xl:text-[21px] font-medium text-[#6c757d] mb-2">
            {item.org} / {item.period}
          </p>
          {item.link && item.description ? (
            <p className="text-[19px] md:text-xl xl:text-[21px] font-medium text-[#6c757d] mb-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.description}
              </a>
            </p>
          ) : item.descriptionParagraphs ? (
            item.descriptionParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[19px] md:text-xl xl:text-[21px] font-medium text-[#6c757d] mb-2 text-justify"
              >
                {paragraph}
              </p>
            ))
          ) : item.description ? (
            <p className="text-[19px] md:text-xl xl:text-[21px] font-medium text-[#6c757d] mb-2 text-justify">
              {item.description}
            </p>
          ) : null}
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="w-full bg-white pt-24 pb-20 md:pb-24 md:pt-28">
      <section className="w-full xl:container flex flex-wrap mx-auto px-5 md:px-10 xl:px-5">
        <div className="flex flex-wrap justify-center w-full">
          <h2 className="flex justify-center w-full">
            <a
              href={resumePdfUrl}
              download
              className="cursor-pointer text-3xl flex justify-center items-center gap-2 w-fit p-2 rounded-md h-40px bg-[#616c5c] font-patrick text-white duration-300 hover:opacity-90"
            >
              RESUME
              <i
                className="bi bi-download text-[0.95em] leading-none"
                aria-hidden
              />
            </a>
          </h2>
          <h3 className="text-5xl w-full flex justify-center text-center font-patrick mt-3 text-[#212529]">
            Summary of my resume
          </h3>
        </div>
        <div className="w-full flex flex-wrap mt-20 justify-between">
          <div className="w-full mt-8 lg:mt-0">
            <h2 className="mb-6 pb-4 font-patrick text-4xl font-medium">
              My Experience
            </h2>
            <TimelineBlock items={experiences} />
          </div>
          <div className="w-full mt-8 lg:mt-10">
            <h2 className="mb-6 pb-4 font-patrick text-4xl font-medium">
              My Education
            </h2>
            <TimelineBlock items={education} />
          </div>
          <div className="w-full flex flex-wrap justify-between mt-8 lg:mt-10">
            <div className="w-full lg:w-[48%] xl:w-[48%] lg:mr-1 xl:mr-5">
              <h2 className="mb-6 pb-4 font-patrick text-4xl font-medium">
                My Hard Skills
              </h2>
              <div className="border-s-2 pl-3 border-[#616c5c] font-handlee">
                <SkillList skills={hardSkills} />
              </div>
            </div>
            <div className="w-full lg:w-[45%] xl:w-[48%] mt-8 lg:mt-0">
              <h2 className="mb-6 pb-4 font-patrick text-4xl font-medium">
                My Soft Skills
              </h2>
              <div className="border-s-2 pl-3 border-[#616c5c] font-handlee">
                <SkillList skills={softSkills} soft />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}