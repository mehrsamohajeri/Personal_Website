export function About() {
  return (
    <section id="about" className="w-full bg-[#f8f9fa] pt-24 pb-20 md:pb-24 md:pt-28">
      <section className="w-full xl:container flex flex-wrap mx-auto px-5 md:px-10 xl:px-5">
        <div className="flex flex-wrap justify-center w-full">
          <h2 className="text-3xl flex justify-center w-fit p-2 rounded-md h-40px bg-[#616c5c] font-patrick text-white">
            ABOUT ME
          </h2>
          <h3 className="text-5xl w-full flex justify-center font-patrick mt-3 text-[#212529]">
            Know me more
          </h3>
        </div>
        <div className="w-full flex flex-wrap justify-between mt-5">
          <div className="w-full lg:w-[66%] flex flex-wrap font-handlee mt-16">
            <p className="text-[#212529] font-light text-[26px]">
              Hi, I&apos;m{" "}
              <strong className="relative after:absolute after:left-0 after:top-[100%] after:w-full after:h-[3px] after:bg-[#616c5c] after:rounded-sm font-semibold text-3xl">
                Mehrsa Mohajeri
              </strong>
              .
            </p>
            <p className="font-medium text-[#212529] mt-3 leading-9 text-[26px] w-full text-justify">
              I’m a Frontend Developer and my professional journey revolves
              around three key elements: problem-solving, attention to detail
              and collaboration. I have a strong desire for looking into complex
              issues and discovering innovative solutions. This passion for
              finding answers, combined with my natural curiosity, fuels my work
              in the digital realm.
            </p>
          </div>
          <div className="w-full lg:w-[20%] flex-wrap flex justify-center content-center mt-8 lg:mt-16">
            <strong className="text-[#616c5c] text-center w-full font-patrick text-8xl font-black">
              +3
            </strong>
            <p className="text-[#212529] text-center w-full font-patrick text-2xl">
              Years of <strong className="text-3xl font-bold">Experience</strong>
            </p>
          </div>
        </div>
        <div className="w-full mt-14 flex flex-wrap justify-between">
          <div className="flex flex-wrap w-full sm:w-[45%] lg:w-[22%] font-handlee content-center">
            <p className="w-full text-center sm:text-start text-[#6c757d] text-[25px]">
              Name:
            </p>
            <p className="w-full text-center sm:text-start text-[25px] text-[#212529] -mt-2">
              Mehrsa Mohajeri
            </p>
          </div>
          <div className="flex flex-wrap w-full sm:w-[45%] lg:w-[33%] font-handlee content-center mt-3 sm:mt-0">
            <p className="w-full text-center sm:text-start text-[#6c757d] text-[25px]">
              Email:
            </p>
            <a
              href="mailto:contact@mehrsamohajeri.com"
              className="w-full text-center sm:text-start text-[25px] text-[#212529] -mt-2"
            >
              <p className="w-full text-center sm:text-start text-[25px] text-[#212529]">
                contact[at]mehrsamohajeri.com
              </p>
            </a>
          </div>
          <div className="flex flex-wrap w-full sm:w-[45%] lg:w-[25%] font-handlee content-center mt-3 lg:mt-0">
            <p className="w-full text-center sm:text-start text-[#6c757d] text-[25px]">
              Date of birth:
            </p>
            <p className="w-full text-center sm:text-start text-[25px] text-[#212529] -mt-2">
              30 January 2001
            </p>
          </div>
          <div className="flex flex-wrap w-full sm:w-[45%] lg:w-[14%] font-handlee content-center mt-3 lg:mt-0">
            <p className="w-full text-center sm:text-start text-[#6c757d] text-[25px]">
              From:
            </p>
            <p className="w-full text-center sm:text-start text-[25px] text-[#212529] -mt-2">
              Tehran, Iran
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}