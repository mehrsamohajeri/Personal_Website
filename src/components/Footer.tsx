export function Footer() {
  return (
    <section className="w-full bg-[#212529] py-8">
      <section className="w-full xl:container mx-auto px-5 md:px-10 xl:px-5">
        <div className="flex-wrap flex justify-center w-full">
          <div className="w-full text-xl text-white lg:w-[50%] flex-wrap flex items-center justify-center lg:justify-start font-patrick">
            Copyright © 2026. All rights reserved.
          </div>
          <div className="w-full text-xl text-white lg:w-[50%] flex-wrap flex items-center justify-center lg:justify-end lg:mt-0 mt-2 font-patrick">
            <p>
              This site is made with ♥️ by{" "}
              <strong className="text-[#616c5c]">Mehrsa Mohajeri</strong>.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}