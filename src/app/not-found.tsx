import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#616c5c] flex flex-wrap justify-center content-center px-5 selection:text-white selection:bg-[#acbfa3]">
      <div className="w-full max-w-lg text-center font-patrick">
        <p className="text-8xl font-black text-white mb-2">404</p>
        <h1 className="text-3xl md:text-4xl text-[#212529] font-semibold mb-4">
          Page not found
        </h1>
        <p className="font-handlee text-xl text-[#212529] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-block p-2 text-xl border-[3px] border-[#212529] bg-[#212529] text-white rounded-md hover:bg-transparent hover:text-[#212529] duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}