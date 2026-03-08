function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-3xl mx-auto px-8 pt-24">
      <p className="text-sm uppercase tracking-widest mb-4 text-accent">
        Colombia · Bilingual · IT Support
      </p>
      <h1 className="text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>
        Hi, I'm<br />
        <em className="text-accent">Alexis.</em>
      </h1>
      <p className="text-lg max-w-lg leading-relaxed text-muted" >
        22 years old, problem-solver by instinct. I love technology — software, hardware, all of it — and I genuinely enjoy helping people figure things out.
      </p>
      <div className="flex items-center gap-3 mt-16 text-muted" >
        <div className="h-px w-10 bg-current" />
        <span className="text-xs uppercase tracking-widest">scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero