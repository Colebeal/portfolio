const clients = [
  "L.A.B. Golf, Staff Photographer",
  "Red Bull",
  "SURFER Magazine",
  "B. Draddy",
  "TCSS",
  "DeadKooks Surfboards",
  "Bing Surfboards",
  "Kassia Surf",
  "Wilderness Collective",
]

export default function AboutPage() {
  return (
    <section
      id="about-index"
      data-index-section="about"
      className="portfolio-accent-border-strong min-h-screen border-b px-5 pb-20 pt-20 text-left md:px-10 lg:px-14 lg:pb-16 lg:pt-12 2xl:px-20"
      aria-labelledby="about-title"
    >
      <header className="pb-3 lg:mb-14 lg:pb-6">
        <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
          About the artist
        </p>
        <h1
          id="about-title"
          className="portfolio-accent-text max-w-5xl text-5xl md:text-[9rem] min-[1440px]:text-[15rem]"
        >
          Cole Beal
        </h1>
      </header>

      <div className="mt-4 grid gap-10 lg:mt-0 lg:grid-cols-[minmax(0,40rem)_minmax(280px,1fr)] lg:gap-16 xl:gap-24">
        <figure className="lg:col-start-2 lg:row-start-1">
          <img
            src="/images/about/cole-beal-768.webp"
            srcSet="/images/about/cole-beal-480.webp 480w, /images/about/cole-beal-768.webp 768w, /images/about/cole-beal-1200.webp 1200w"
            sizes="(min-width: 1536px) 28vw, (min-width: 1024px) 24vw, 100vw"
            alt="Portrait of photographer Cole Beal"
            width="1200"
            height="1200"
            className="aspect-square w-full object-cover object-center"
          />
        </figure>

        <div className="lg:col-start-1 lg:row-start-1">
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed md:text-2xl xl:text-3xl">
            <p>
              Over more than ten years as a working photographer, I have sought
              out clients who want to create high-quality, stylized imagery.
            </p>
            <p>
              I have been fortunate to work with a wide range of clients,
              primarily in professional sports. I have a particular affinity for
              shooting golf and am always looking for opportunities to expand my
              portfolio and collaborate with like-minded people.
            </p>
          </div>

          <div className="portfolio-accent-border-muted mt-8 grid gap-10 border-t pt-8 md:grid-cols-2 lg:mt-14">
            <section>
              <h2 className="mb-5 text-xs font-normal uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Selected clients
              </h2>
              <ul className="space-y-2 text-base md:text-lg">
                {clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-5 text-xs font-normal uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                Contact
              </h2>
              <div className="flex flex-col items-start gap-3 text-base md:text-lg">
                <a
                  href="mailto:cole@colebeal.com?subject=Let's connect"
                  className="underline decoration-1 underline-offset-4"
                >
                  cole@colebeal.com
                </a>
                <a
                  href="https://www.instagram.com/colebeal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4"
                >
                  @colebeal
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
