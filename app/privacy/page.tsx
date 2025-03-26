export const metadata = {
    title: "About - Invisible Text",
    description: "Learn about Invisible Text and how it can help you generate blank spaces and invisible characters.",
  }
  
  export default function AboutPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 ">About Invisible Text</h1>
  
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Invisible Text is a specialized tool designed to generate blank spaces and invisible characters that can be
              copied and pasted across various platforms and applications.
            </p>
  
            <h2 className="text-2xl font-semibold mt-8 mb-4 ">Our Mission</h2>
            <p>
              Our mission is to provide a simple, efficient way for users to create and utilize invisible text for various
              purposes. Whether you need to create aesthetic spacing in social media posts, send blank messages, or create
              unique formatting solutions, our tool makes it easy.
            </p>
  
            <h2 className="text-2xl font-semibold mt-8 mb-4 ">How It Works</h2>
            <p>
              Invisible Text uses Unicode characters that render as blank spaces but are actually valid characters. These
              include Zero-Width Space (U+200B), Zero-Width Non-Joiner (U+200C), and other similar characters that appear
              invisible when displayed but can be copied, pasted, and recognized by computer systems.
            </p>
  
            <p className="mt-4">Our tool offers multiple methods to generate these invisible characters:</p>
  
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Direct copy button for quick access to blank spaces</li>
              <li>Select and copy method for those who prefer manual selection</li>
              <li>Custom generation based on specific requirements</li>
              <li>Unlimited character generation for longer invisible text needs</li>
            </ul>
  
            <h2 className="text-2xl font-semibold mt-8 mb-4 ">Use Cases</h2>
  
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#002060] p-6 rounded-lg border border-yellow-500/20">
                <h3 className="font-medium text-xl mb-2 ">Social Media</h3>
                <p>
                  Create aesthetic spacing in posts, comments, and bios on platforms like Instagram, Twitter, and
                  Facebook.
                </p>
              </div>
  
              <div className="bg-[#002060] p-6 rounded-lg border border-yellow-500/20">
                <h3 className="font-medium text-xl mb-2 ">Messaging</h3>
                <p>
                  Send blank messages or create unique formatting in messaging apps like WhatsApp, Telegram, and Discord.
                </p>
              </div>
  
              <div className="bg-[#002060] p-6 rounded-lg border border-yellow-500/20">
                <h3 className="font-medium text-xl mb-2 ">Web Design</h3>
                <p>Create invisible separators or spacers in HTML and CSS without using traditional spacing methods.</p>
              </div>
  
              <div className="bg-[#002060] p-6 rounded-lg border border-yellow-500/20">
                <h3 className="font-medium text-xl mb-2 ">Creative Writing</h3>
                <p>Format text in unique ways for creative writing, poetry, or artistic text presentations.</p>
              </div>
            </div>
  
            <h2 className="text-2xl font-semibold mt-8 mb-4 ">Our Team</h2>
            <p>
              Invisible Text was created by a small team of developers who noticed the need for a simple, reliable tool to
              generate invisible characters. With backgrounds in web development and user experience design, our team is
              committed to providing tools that solve specific problems in elegant ways.
            </p>
  
            <div className="bg-[#002060] p-6 rounded-lg mt-8 border border-yellow-500/20">
              <h2 className="text-2xl font-semibold mb-4 ">Contact Us</h2>
              <p className="mb-4">
                Have questions, suggestions, or feedback about Invisible Text? We'd love to hear from you!
              </p>
              <p className="mb-2">
                <strong className="">Email:</strong> support@invisibletext.me
              </p>
              <p>
                <strong className="">Follow us:</strong> @invisibletextapp on Twitter and Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  