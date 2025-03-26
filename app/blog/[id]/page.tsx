import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Creative Ways to Use Invisible Text in Social Media",
    description: "Discover how content creators are using invisible characters to enhance their social media posts.",
    date: "March 15, 2023",
    readTime: "5 min read",
    category: "Social Media",
    content: `
      <p>Social media platforms have become increasingly competitive, with content creators constantly looking for new ways to stand out. One creative technique that's gaining popularity is the use of invisible Unicode characters to enhance posts and profiles.</p>
      
      <h2>1. Create Clean Line Breaks on Instagram</h2>
      <p>Instagram doesn't naturally allow for clean line breaks in captions. By using invisible characters, you can create perfectly spaced captions without the dots or dashes that many users resort to.</p>
      
      <h2>2. Improve Twitter Thread Readability</h2>
      <p>When creating Twitter threads, invisible characters can help with formatting and readability, making your content more engaging and easier to follow.</p>
      
      <h2>3. Add Spacing in Facebook Posts</h2>
      <p>Facebook's formatting can sometimes feel limiting. Invisible characters allow for creative spacing that makes your posts stand out in crowded feeds.</p>
      
      <h2>4. Create Minimalist Bios</h2>
      <p>Some creators use invisible characters to create a sense of minimalism and space in their social media bios, giving a clean and modern aesthetic.</p>
      
      <h2>5. Separate Hashtag Groups</h2>
      <p>Organize your hashtags into visually separated groups without using visible dividers, creating a cleaner look while maintaining searchability.</p>
      
      <h2>6. Format LinkedIn Articles</h2>
      <p>Professional content on LinkedIn can benefit from subtle spacing adjustments that invisible characters provide, especially in longer form content.</p>
      
      <h2>7. Create "Hidden" Messages</h2>
      <p>Some creators use invisible characters to create messages that are only visible when the text is selected or copied, adding an element of surprise for engaged followers.</p>
      
      <h2>8. Improve Comment Organization</h2>
      <p>When responding to comments with multiple points, invisible characters can help organize your thoughts without cluttering the response.</p>
      
      <h2>9. Create Clean Lists</h2>
      <p>Invisible characters allow for the creation of visually appealing lists without relying on platform-specific formatting options.</p>
      
      <h2>10. Enhance Profile Layouts</h2>
      <p>Some platforms allow for creative profile layouts using invisible characters to control spacing and alignment of text elements.</p>
      
      <p>As social media continues to evolve, these subtle formatting techniques can help your content stand out in increasingly crowded spaces. The key is to use invisible characters purposefully to enhance readability and visual appeal, rather than to obscure or complicate your message.</p>
    `,
  },
  {
    id: 2,
    title: "The History of Unicode and Invisible Characters",
    description:
      "Learn about the fascinating origin of invisible characters and how they became part of the Unicode standard.",
    date: "February 22, 2023",
    readTime: "8 min read",
    category: "Tech History",
    content: `<p>The story of invisible Unicode characters is a fascinating chapter in the evolution of digital text and communication...</p>`,
  },
  {
    id: 3,
    title: "How Web Developers Use Invisible Characters",
    description: "Explore the practical applications of invisible characters in modern web development.",
    date: "January 10, 2023",
    readTime: "6 min read",
    category: "Web Development",
    content: `<p>In the world of web development, invisible characters serve numerous practical purposes beyond simple text formatting...</p>`,
  },
  {
    id: 4,
    title: "Invisible Text in Digital Marketing: A New Trend?",
    description: "Marketing professionals are finding new ways to utilize invisible characters in their strategies.",
    date: "December 5, 2022",
    readTime: "4 min read",
    category: "Marketing",
    content: `<p>Digital marketing is constantly evolving, with professionals always on the lookout for innovative techniques to make their content stand out...</p>`,
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 text-center">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        <Button className="mt-6" asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <Button variant="ghost" className="mb-8 -ml-4" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{post.description}</p>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 border-t pt-6">
          <h3 className="text-lg font-medium">Share this article</h3>
          <div className="mt-4 flex gap-4">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Copy Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

