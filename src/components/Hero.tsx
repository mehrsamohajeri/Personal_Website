export function Hero() {
  return (
    <section className="w-full bg-[#616c5c] min-h-screen flex flex-wrap justify-center content-center px-5 md:px-10 xl:px-5">
      <section className="flex flex-wrap justify-between w-full xl:container lg:mt-16 pb-10 md:pb-16 pt-32 lg:pt-20 ">
        <div className="mt-10 lg:mt-0 w-full lg:w-[45%] order-1 lg:-order-none flex flex-wrap content-center">
          <h2 className="text-center lg:text-start w-full capitalize font-pangolin text-[33px] md:text-[55px] text-[#212529] -mb-5">
            Hi, I&apos;m
          </h2>
          <h1 className="text-center lg:text-start w-full capitalize mb-0 font-pangolin font-black text-[#212529] text-[46px] md:text-[54px] lg:text-[63px] xl:text-[70px]">
            Mehrsa Mohajer
            <strong className="text-white lowercase inline-block animate__backInUp animate__animated animate__repeat-1">
              i
            </strong>
          </h1>
          <p className="text-center lg:text-start text-[28px] w-full mb-4 font-pangolin text-[#212529] -mt-3 font-extralight">
            A Front-End Developer
          </p>
          <div className="w-full flex-wrap flex font-patrick justify-center lg:justify-start">
            <a
              href="#portfolio"
              className="p-2 w-[130px] h-[50px] border-[3px] border-[#212529] bg-[#212529] text-white text-xl rounded-md flex justify-center items-center mr-2 hover:text-[#212529] hover:bg-transparent duration-300"
            >
              View My Works
            </a>
            <a
              href="#contact"
              className="p-2 w-[110px] h-[50px] border-[3px] border-[#212529] flex justify-center items-center text-xl text-[#212529] rounded-md hover:text-white hover:bg-[#212529] duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[45%]">
          <figure className="lg:justify-end justify-center flex w-full rounded-full">
            <img
              className="md:w-[60%] lg:w-[80%] w-[70%] animate-main-photo grayscale rounded-full"
              src="/Image/me.webp"
              alt="Mehrsa Mohajeri"
            />
          </figure>
        </div>
      </section>
    </section>
  );
}