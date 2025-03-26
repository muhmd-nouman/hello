import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Generate Perfect Names in Seconds
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create unique, memorable names for people, businesses, domains, characters, and more with our advanced
              name generator.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#generator">
              <Button size="lg">Start Generating</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

