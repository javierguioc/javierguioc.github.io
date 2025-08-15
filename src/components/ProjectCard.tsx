import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, codeUrl, demoUrl, thumbnail, tags } = project

  return (
    <article className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      <div className="aspect-video bg-neutral-900/60">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-neutral-500 text-sm">Thumbnail</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-neutral-100 font-medium">{title}</h3>
        {tags && tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {tags.map((t) => (
              <span key={t} className="text-[10px] rounded border border-white/10 px-1.5 py-0.5 text-neutral-400">
                {t}
              </span>
            ))}
          </div>
        )}
        <p className="mt-2 text-neutral-400 text-sm line-clamp-3">{description}</p>
        <div className="mt-3 flex gap-2">
          <a
            href={codeUrl}
            target="_blank"
            className="text-xs rounded-md border border-white/10 px-2.5 py-1.5 hover:bg-white/5 text-neutral-200"
          >
            View Code
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              className="text-xs rounded-md bg-emerald-500 px-2.5 py-1.5 text-neutral-950 hover:bg-emerald-400"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}





