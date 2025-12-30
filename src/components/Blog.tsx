export const Blog = () => (
    <section id="blog" className="w-[80%] mx-auto py-8 md:py-16">
      <div className="  text-center space-y-8">
        <div className="  bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Blog</h2>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7411413754711719936?collapsed=1"
                  className={"rounded-2xl w-full border border-slate-800 shadow-xl"}
                  height="250" frameBorder="0" title="Embedded post"/>
        </div>
      </div>
    </section>
);
