export const Contact = () => (
    <section id="contact" className="w-[92%] md:w-[80%] mx-auto py-4 md:py-6">
      <div className="text-center space-y-8 bg-panel border border-line-soft p-6 md:p-10 xl:p-12 rounded-md shadow-2xl max-h-[calc(100vh-12rem)] overflow-y-auto overscroll-contain">
        <h2 className="text-4xl font-bold text-paper">Reach Out</h2>
        <p className="text-lg text-mist leading-relaxed">
          I am always looking for opportunity to work on new and interesting projects. So please feel free to reach out! I look forward to hearing about your projects.
        </p>
        <div className="pt-4">
          <p className="mb-6 text-muted font-mono text-sm uppercase tracking-widest">Send correspondence to:</p>
          <a
              href="mailto:trinqueeric@gmail.com"
              className="inline-block bg-lilac-soft !text-ink px-8 py-4 rounded-md font-bold hover:bg-lilac transition-all shadow-lg shadow-rosewave/15 active:scale-95"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
);
