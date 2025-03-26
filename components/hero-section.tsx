export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Invisible Text Generator
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create, test, and copy invisible Unicode characters for social media, content creation, and more
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#generator">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Get Started
              </div>
            </a>
            <a href="#faq">
              <div className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Learn More
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

