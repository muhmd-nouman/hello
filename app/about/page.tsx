import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About - Content Creator's Toolkit",
  description: "Learn about our mission to help content creators",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-6">About Invisible Text</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className=" mb-6">
            Content Creator's Toolkit was founded with a simple mission: to provide content writers, copywriters, and
            marketers with the tools they need to create exceptional content efficiently.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            In today's digital landscape, content is king. But creating high-quality, engaging content consistently can
            be challenging. Our mission is to simplify the content creation process by providing intuitive, powerful
            tools that help creators:
          </p>

          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Generate ideas and overcome writer's block</li>
            <li>Optimize content for search engines and readability</li>
            <li>Create engaging forms and interactive elements</li>
            <li>Plan and organize content strategies</li>
            <li>Analyze performance and improve results</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p>
            Content Creator's Toolkit began when our founder, a content marketer, realized how much time was spent
            switching between different tools and platforms to create content. The idea was simple: what if all the
            essential tools for content creation were available in one place?
          </p>

          <p className="mt-4">
            After months of development and testing with professional content creators, we launched our platform with a
            focus on simplicity, efficiency, and quality. Today, thousands of content creators rely on our toolkit to
            streamline their workflow and produce better content.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-muted dark:bg-muted/30 p-6 border rounded-lg">
              <h3 className="font-medium text-xl mb-2">Simplicity</h3>
              <p>
                We believe powerful tools should be easy to use. Our interfaces are intuitive and designed to help you
                focus on creating, not learning complicated software.
              </p>
            </div>

            <div className="bg-muted dark:bg-muted/30 p-6 border rounded-lg">
              <h3 className="font-medium text-xl mb-2">Quality</h3>
              <p>
                We're committed to helping you create the best content possible. Our tools are designed to elevate the
                quality of your work and help you stand out.
              </p>
            </div>

            <div className="bg-muted dark:bg-muted/30 p-6 border rounded-lg">
              <h3 className="font-medium text-xl mb-2">Efficiency</h3>
              <p>
                Time is valuable. Our toolkit is built to help you work faster and more efficiently, so you can focus on
                what matters most.
              </p>
            </div>

            <div className="bg-muted dark:bg-muted/30 p-6 border rounded-lg">
              <h3 className="font-medium text-xl mb-2">Innovation</h3>
              <p>
                We continuously improve our tools and add new features based on user feedback and emerging trends in
                content creation.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="mb-4">
              We're more than just a toolkit—we're a community of content creators who share ideas, strategies, and
              inspiration. Join us and connect with fellow creators who are passionate about producing exceptional
              content.
            </p>
            <Link href="/contact">
              <Button>Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

