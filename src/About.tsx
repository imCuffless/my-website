function About() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <p className="text-accent text-xs uppercase tracking-widest mb-2">About me</p>
      <h2 className="text-5xl font-bold mb-12" style={{ fontFamily: 'DM Serif Display, serif' }}>
        The honest version.
      </h2>

      <div className="grid grid-cols-2 gap-12">
        
        {/* Left — text */}
        <div className="flex flex-col gap-4 text-muted leading-relaxed">
          <p>I'm a <span className="text-ink font-medium">problem-solver first</span>. When something breaks — hardware, software, a system — my instinct is to dig in and figure it out.</p>
          <p>My goal is <span className="text-ink font-medium">IT support and help desk</span> — there's real satisfaction in fixing a problem and explaining it in a way that actually makes sense.</p>
          <p>I have 8 months of <span className="text-ink font-medium">bilingual customer service</span> experience. I speak <span className="text-ink font-medium">Spanish natively</span> and English at a near-C1 level.</p>
        </div>

        {/* Right — card */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h3 className="text-ink font-medium mb-4" style={{ fontFamily: 'DM Serif Display, serif' }}>At a glance</h3>
          <div className="flex flex-wrap gap-2">
            {['🇨🇴 Colombia', '22 y/o', 'Spanish — Native', 'English — B2/C1',
              'IT Support', 'Hardware & Software', 'Customer service', 'Problem-solver'
            ].map(tag => (
              <span key={tag}className="bg-bg border border-border rounded-full px-3 py-1 text-xs text-ink">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About