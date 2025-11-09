import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-rose-50 to-rose-100 text-slate-900 antialiased font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white font-bold">
                B
              </div>
              <span className="font-semibold text-lg">Bumble</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm hover:text-rose-500 transition"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm hover:text-rose-500 transition"
              >
                How it works
              </a>
              <button className="ml-2 px-4 py-2 rounded-full bg-rose-500 text-white text-sm shadow-md hover:bg-rose-600 transition">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button aria-label="menu" className="p-2 rounded-md text-2xl">
                ☰
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="pt-24 md:pt-28 flex flex-col items-center justify-center px-6 lg:px-8 text-center">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          className="mb-6 dark:invert"
          priority
        />
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Find meaningful connections — made simple.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-700">
          Meet new people and start real conversations in a safe and inclusive
          space. Swipe, chat, and connect effortlessly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 rounded-full bg-rose-500 text-white shadow-md hover:bg-rose-600 transition">
            Get Started
          </button>
        </div>
      </main>

      {/* FEATURE SECTION */}
      <section
        id="features"
        className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-white mt-20 md:mt-0 relative overflow-hidden"
      >
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col justify-center space-y-6 max-w-lg z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
            We exist to bring <br /> people closer to love.
          </h1>
          <p className="text-lg text-gray-700">
            We want our members to find meaningful and authentic relationships
            that ignite confidence and joy.
          </p>
        </div>

        {/* RIGHT IMAGE CARDS */}
        <div className="flex-1 flex justify-center items-center relative h-[500px] md:h-[600px]">
          {/* CARD 1 */}
          <div className="absolute top-12 right-0 z-30 md:translate-x-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-64 md:w-72 hover:scale-105 transition-transform duration-500">
              <Image
                src="/card1.jpg"
                alt="Outdoors"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-4 right-4 bg-yellow-300 text-black text-sm font-semibold py-1 px-3 rounded-full rotate-90 origin-top-right">
                Outdoors
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="absolute top-24 right-24 z-20 md:translate-x-2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-64 md:w-72 hover:scale-105 transition-transform duration-500">
              <Image
                src="/card2.jpg"
                alt="Running"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-4 right-4 bg-yellow-200 text-black text-sm font-semibold py-1 px-3 rounded-full rotate-90 origin-top-right">
                Running
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="absolute top-36 right-44 z-10 md:-translate-x-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl w-64 md:w-72 hover:scale-105 transition-transform duration-500">
              <Image
                src="/card3.jpg"
                alt="Dog parent"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <span className="absolute top-4 right-4 bg-yellow-300 text-black text-sm font-semibold py-1 px-3 rounded-full rotate-90 origin-top-right">
                Dog parent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="py-24 px-6 md:px-20 bg-linear-to-b from-white via-rose-50 to-rose-100 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          How It Works
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-16">
          Get started in just a few simple steps and start building real
          connections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Create Your Profile
            </h3>
            <p className="text-gray-600">
              Sign up in seconds and add your interests, passions, and what
              you’re looking for in a match.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Match & Connect
            </h3>
            <p className="text-gray-600">
              Swipe through potential matches, connect with people who share
              your values and goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Start Something Real
            </h3>
            <p className="text-gray-600">
              Chat, meet, and start building genuine relationships in a safe and
              inclusive environment.
            </p>
          </div>
        </div>
      </section>

      {/* LAST SECTION + FOOTER */}
      <section className="bg-linear-to-t from-rose-100 via-rose-50 to-white py-24 px-6 md:px-20 text-center mt-12 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Ready to find your connection?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
          Join thousands of people who have already found meaningful
          relationships through Bumble.
        </p>
        <button className="px-8 py-4 rounded-full bg-rose-500 text-white text-lg font-semibold shadow-md hover:bg-rose-600 transition">
          Join Bumble Today
        </button>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-rose-200/60 pt-6 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Bumble
          </p>
        </footer>
      </section>
    </div>
  );
}
