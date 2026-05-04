import { Dossier } from './Dossier';
import profile_pic from "../assets/profile_pic.webp"

export const Hero = () => (
    <section id="home" className="w-[92%] md:w-[84%] mx-auto py-4 md:py-6 max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
      <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
        {/* Left Column: Intro */}
        <div className="space-y-5 animate-slide-in-left">
          <div>
            <p className="font-mono text-lilac text-lg">
              Hi, my name is
              <span className="text-paper text-4xl md:text-5xl xl:text-6xl font-extrabold block mt-2">
                Eric Trinque
              </span>
            </p>

            <h3 className="text-xl md:text-3xl font-bold text-muted">
              Software Engineer | Developer
            </h3>

            <div className="space-y-3 my-4 text-base xl:text-lg max-w-2xl">
              <p className="leading-relaxed ">
                I enjoy building robust and maintainable products using modern development tools and methodologies.
                Recent work includes enterprise platforms serving 50+ users with 99.5% uptime.
                Concurrent backend systems built to scale.
                And real-time interactive applications optimized for performance.
                Clean architecture. Tested code. Measurable results.
              </p>

              <p className="leading-relaxed">
                I have returned to academia in the evenings for my degree in Comp.Sci.-Mobile Development at {" "}
                <a href="https://www.fullsail.edu" className="text-lilac hover:text-rosewave font-bold transition-colors underline decoration-lilac/35 underline-offset-4">
                  FullSail University
                </a>
                . My goal is to position myself as an expert in my field and work with the best and brightest in the industry...{' '}
                <a href={"#about"} className="text-lilac hover:text-rosewave font-semibold transition-colors">
                  Learn More...
                </a>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-10 mt-6">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 xl:w-52 xl:h-52 rounded-md border border-line-soft shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-panel flex items-center justify-center text-paper text-6xl">
                    <img src={profile_pic} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" alt="Profile" />
                  </div>
                </div>
              </div>

              <div className="bg-panel border border-line-soft rounded-md p-5 max-w-md shadow-xl">
                <code className="text-mist text-sm md:text-base block font-mono">
                  <span className="text-lilac">if</span> (!<var className="text-cyanwave">knownSkill</var>) {'{'}<br />
                  <span className="ml-4"><span className="text-lilac">const</span> <var className="text-cyanwave">getGood</var> = <span className="text-mintwave">"LEARN"</span>;</span><br />
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
