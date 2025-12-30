export const Contact = () => (
    <section id="contact" className="w-[80%] mx-auto py-8 md:py-16">
      <div className="text-center space-y-8 bg-slate-900 border border-slate-800 p-12 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-white">Reach Out</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          I am always looking for opportunity to work on new and interesting projects. So please feel free to reach out! I look forward to hearing about your projects.
        </p>
        <div className="pt-4">
          <p className="mb-6 text-slate-400 font-mono text-sm uppercase tracking-widest">Send correspondence to:</p>
          <a
              href="mailto:trinqueeric@gmail.com"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
);
