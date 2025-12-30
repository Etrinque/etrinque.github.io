import { Dossier } from './Dossier';

export const Hero = () => (
    <section id="home" className="w-[80%] mx-auto py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Intro */}
        <div className="space-y-6 animate-slide-in-left">
          <div>
            <p className="font-mono text-indigo-400 text-lg">
              Hi, my name is
              <span className="text-white text-4xl md:text-6xl font-extrabold block mt-2">
                Eric Trinque
              </span>
            </p>

            <h3 className="text-xl md:text-3xl font-bold text-slate-400">
              Software Engineer | Developer
            </h3>

            <div className="space-y-4 my-4 text-lg max-w-2xl">
              <p className="leading-relaxed ">
                I enjoy building robust and maintainable products using modern development tools and methodologies.
                Recent work includes enterprise platforms serving 50+ users with 99.5% uptime.
                Concurrent backend systems built to scale.
                And real-time interactive applications optimized for performance.
                Clean architecture. Tested code. Measurable results.
              </p>

              <p className="leading-relaxed">
                I have returned to academia in the evenings for my degree in Comp.Sci.-Mobile Development at {" "}
                <a href="https://www.fullsail.edu" className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors underline decoration-indigo-400/30 underline-offset-4">
                  FullSail University
                </a>
                . My goal is to position myself as an expert in my field and work with the best and brightest in the industry...{' '}
                <a href={"#about"} className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                  Learn More...
                </a>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-6xl">
                    <img src={"./src/assets/profile_pic.jpg"} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Profile" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md shadow-xl">
                <code className="text-slate-300 text-sm md:text-base block font-mono">
                  <span className="text-indigo-400">if</span> (!<var className="text-sky-400">knownSkill</var>) {'{'}<br />
                  <span className="ml-4"><span className="text-indigo-400">const</span> <var className="text-sky-400">getGood</var> = <span className="text-emerald-400">"LEARN"</span>;</span><br />
                  {'}'}
                </code>
              </div>
            </div>
          </div>
        </div>

        <Dossier />
      </div>
    </section>
);
