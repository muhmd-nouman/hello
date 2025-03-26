import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "10 Creative Ways to Use Invisible Text in Social Media",
      description: "Discover how content creators are using invisible characters to enhance their social media posts.",
      date: "March 15, 2023",
      readTime: "5 min read",
      category: "Social Media",
    },
    {
      id: 2,
      title: "The History of Unicode and Invisible Characters",
      description:
        "Learn about the fascinating origin of invisible characters and how they became part of the Unicode standard.",
      date: "February 22, 2023",
      readTime: "8 min read",
      category: "Tech History",
    },
    {
      id: 3,
      title: "How Web Developers Use Invisible Characters",
      description: "Explore the practical applications of invisible characters in modern web development.",
      date: "January 10, 2023",
      readTime: "6 min read",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Invisible Text in Digital Marketing: A New Trend?",
      description: "Marketing professionals are finding new ways to utilize invisible characters in their strategies.",
      date: "December 5, 2022",
      readTime: "4 min read",
      category: "Marketing",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Blog & Resources</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Tips, tricks, and insights about invisible text and creative content
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <CardTitle className="mt-2 line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3 mt-2">{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{post.readTime}</span>
              <Button variant="link" className="p-0">
                <Link href={`/blog/${post.id}`}>Read more</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="mx-auto">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

