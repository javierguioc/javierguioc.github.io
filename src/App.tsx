import { useEffect } from 'react'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import AboutContent from './sections/AboutContent'
import AnimatedBackground from './components/AnimatedBackground'

function useForceDarkTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])
}

function Section({ id, children, title }: { id: string; children: React.ReactNode; title: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100 mb-8">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  useForceDarkTheme()

  return (
    <div className="relative min-h-dvh text-neutral-100">
      <AnimatedBackground />
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/5">
        <nav className="mx-auto max-w-6xl px-4 h-14 md:h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight text-neutral-100">Javier Guio</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#journey" className="hover:text-white transition-colors">Learning</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-emerald-400 text-sm font-medium">AI Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Javier Guio
            </h1>
            <p className="mt-4 text-neutral-300 text-balance">
              Full‑Stack developer at Mercado Libre, learning AI/ML and building projects to explore
              NLP, vision, and ML systems. Sharing progress, demos, and code.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400 transition-colors"
              >
                View Projects
              </a>
              <a
                href="https://github.com/javierguioc"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <img
              src="https://avatars.githubusercontent.com/u/51929663?s=400&u=d6cefd02043fca08a58040814e286c1d7257f74a&v=4"
              alt="Javier Guio"
              className="h-48 md:h-60 aspect-square rounded-2xl object-cover ring-1 ring-white/10"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me">
        <div className="reveal in-view">
          <AboutContent />
        </div>
      </Section>

      {/* Learning Journey */}
      <Section id="journey" title="Learning Journey">
        <ol className="relative border-s border-white/10 ms-2 reveal in-view">
          {[
            {
              title: 'Foundations',
              detail: 'Python, data wrangling, and ML fundamentals',
            },
            {
              title: 'NLP Basics',
              detail: 'Tokenization, embeddings, and text classification',
            },
            {
              title: 'Deploy & Share',
              detail: 'Hugging Face Spaces, demos, and model hosting',
            },
          ].map((item, idx) => (
            <li key={idx} className="mb-8 ms-4">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full mt-1.5 -start-1.5 border border-neutral-900" />
              <h3 className="text-neutral-100 font-medium">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal in-view">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="flex flex-wrap items-center gap-3 text-sm reveal in-view">
          <a
            href="https://www.linkedin.com/in/javier-guio/"
            target="_blank"
            className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5 text-neutral-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/javierguioc"
            target="_blank"
            className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5 text-neutral-200"
          >
            GitHub
          </a>
          <a
            href="https://huggingface.co/JavierGuio"
            target="_blank"
            className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5 text-neutral-200"
          >
            Hugging Face
          </a>
          <a
            href="mailto:hernan.guioc@gmail.com"
            className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5 text-neutral-200"
          >
            Email
          </a>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} Javier Guio. All rights reserved.
      </footer>
    </div>
  )
}
