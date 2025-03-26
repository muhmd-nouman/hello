import Image from "next/image"
import {
  Gamepad2,
  MessageSquare,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Slack,
  Smartphone,
  FileText,
  Code,
  PenTool,
} from "lucide-react"

export default function PracticalUseCases() {
  return (
    <section className="mx-auto py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold dark:text-yellow-300 mb-8">Practical Uses for Invisible Characters</h2>

        {/* Gaming Section */}
        <div className="mb-12 bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="text-yellow-300 h-8 w-8 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-black dark:text-yellow-200">Gaming Usernames & Profiles</h3>
          </div>

          <p className="mb-6">
            Invisible characters have become a secret weapon for gamers looking to create standout usernames and profiles. 
            These special characters let you add unique spacing, create mysterious-looking names, and help your profile 
            stand out from thousands of others. Many competitive players use these characters to make their names instantly 
            recognizable in leaderboards and during gameplay.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-background dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">Fortnite Username Customization</h4>
              <p className="mb-4">
                Fortnite's massive player base means standing out is crucial. Invisible characters allow you to create 
                eye-catching names that appear to float or have unusual spacing. Pro players and streamers often use these 
                characters to create a recognizable brand identity that fans can easily spot during tournaments and streams.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  How to use invisible characters in Fortnite:
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Generate invisible characters using our tool</li>
                  <li>Copy the invisible characters to your clipboard</li>
                  <li>Open Fortnite and go to your account settings</li>
                  <li>Paste the invisible characters in your display name</li>
                  <li>Save your changes</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">Popular uses in Fortnite:</h5>
                <ul className="list-disc pl-5 space-y-1 ">
                  <li>Create a completely invisible username that appears as a blank space</li>
                  <li>Add custom spacing between characters for a distinctive look</li>
                  <li>Make your name appear unique and recognizable in the kill feed</li>
                  <li>Create clan tags that stand out from standard text</li>
                  <li>Achieve "floating" text effects in your display name</li>
                </ul>
              </div>
            </div>

            <div className=" dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">PUBG Mobile & PC Naming Tricks</h4>
              <p className="mb-4">
                PUBG players have discovered that invisible characters create a tactical advantage by making usernames harder 
                to report or remember. Many top-ranked players use these characters to create minimal, clean-looking names 
                that still maintain their uniqueness. This technique has become especially popular in competitive play.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">How to use invisible characters in PUBG:</h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Generate invisible characters using our tool</li>
                  <li>Copy the invisible characters to your clipboard</li>
                  <li>Open PUBG and navigate to your profile</li>
                  <li>Edit your name and paste the invisible characters</li>
                  <li>Confirm the changes</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">Popular uses in PUBG:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create mysterious-looking usernames that appear shorter than they are</li>
                  <li>Make your clan name unique with unusual spacing</li>
                  <li>Add invisible spacing to create centered or right-aligned text</li>
                  <li>Create a minimalist profile appearance that still stands out</li>
                  <li>Make special characters appear to float in your username</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/5 p-4 rounded-lg">
            <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">Other Popular Games</h4>
            <p className="mb-4">
              Invisible characters have found their way into virtually every online game community. Players use them to 
              enhance their digital identity and gain a visual advantage in how their names appear. From MMORPGs to 
              first-person shooters, these special characters serve many creative purposes:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div> 
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">Minecraft</h5>
                <p className="mb-4">
                  Minecraft server owners use invisible characters to create visually striking server names and 
                  descriptions. Players also use them in signs, books, and chat messages to create unique formatting 
                  effects that enhance roleplaying and storytelling experiences. Custom spacing in faction names has 
                  become a status symbol on competitive servers.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">Call of Duty</h5>
                <p className="mb-4">
                  CoD players leverage invisible characters to create intimidating usernames that stand out in lobbies and 
                  kill feeds. Pro players often use these characters to maintain their brand identity across different 
                  tournaments and streaming platforms. The tactical advantage comes from names that are distinctive but 
                  difficult for opponents to accurately report or remember.
                </p>
              </div>

              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">League of Legends</h5>
                <p className="mb-4">
                  LoL players have turned username customization into an art form with invisible characters. High-ranked 
                  players use these to create clean, minimal summoner names that convey professionalism and skill. Clan 
                  tags with custom spacing help teams establish a cohesive identity that fans can recognize instantly during 
                  tournaments and live streams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messaging Apps Section */}
        <div className="mb-12 bg-white dark:bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-yellow-300 h-8 w-8 flex-shrink-0" />
            <h3 className="text-2xl font-semibold dark:text-yellow-100">Messaging Apps & Social Media</h3>
          </div>

          <p className="mb-4">
            Messaging platforms have become the center of our digital social lives. Invisible characters help you create 
            unique messages that grab attention, improve readability, and add personality to your online presence. From 
            blank messages that create suspense to perfectly formatted multi-paragraph posts, these characters enhance 
            your communication.
          </p>
          <p className="mb-6">
            Using invisible characters in your messages allows for creative expression beyond what the platforms normally 
            allow. You can create visual effects, improve text layout, and make your messages stand out from the typical 
            conversations happening around you. This subtle technique has become popular among influencers and content 
            creators seeking to differentiate their online presence.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/whatapp_logo-icon.svg" className="text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">WhatsApp Message Formatting</h4>
              </div>
              <p className="mb-4">
                WhatsApp's limited formatting options leave many users looking for creative solutions. Invisible characters 
                fill this gap by allowing custom line spacing, paragraph breaks, and even completely blank messages that 
                build anticipation. Business users particularly benefit from improved message formatting for professional 
                communications.
              </p>
              <p className="mb-4">
                To use invisible characters in WhatsApp, simply generate them with our tool, copy them to your clipboard, 
                then paste them into your message composer wherever you need spacing or a blank message. These characters 
                remain invisible but create the spacing effect you want.
              </p>

              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">Creative uses in WhatsApp:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Send an empty message to grab attention or create suspense</li>
                  <li>Create custom spacing between paragraphs in long messages</li>
                  <li>Make your status appear empty or minimalistic</li>
                  <li>Create artistic text layouts that improve readability</li>
                  <li>Format business communications with professional spacing</li>
                </ul>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src="/send-invisible-messages-on-whatsapp.avif?height=300&width=200"
                  alt="WhatsApp message example"
                  width={200}
                  height={300}
                  className="bg-[#efefef] dark:bg-white/5 py-2 shadow-white/50 shadow-md rounded-2xl border border-black/10 dark:border-white/10 opacity-80 dark:opacity-60"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Twitter className="text-blue-400 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">Usage Tips for Twitter/X</h4>
              </div>
              <p className="mb-4">
                Twitter's character limits make every space valuable. Invisible characters allow users to create blank tweets 
                that stand out in crowded feeds, add custom spacing between paragraphs, and format threads for improved 
                readability. Many viral tweets use these techniques to maximize impact and engagement in the limited space 
                available.
              </p>

              <div className="mb-4">
                <h5 className="text-lg font-medium text-yellow-100 mb-2">Creative uses on Twitter:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create blank tweets that grab attention in busy feeds</li>
                  <li>Add custom spacing between paragraphs for readability</li>
                  <li>Make your display name unique with invisible character formatting</li>
                  <li>Create minimalist profiles with strategic spacing</li>
                  <li>Format thread posts consistently for better storytelling</li>
                </ul>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src="/send-invisible-message-on-twitter.avif?height=300&width=200"
                  alt="Twitter blank tweet example"
                  width={200}
                  height={300}
                  className="bg-[#efefef] dark:bg-white/5  py-2 shadow-white/50 shadow-md rounded-2xl border border-black/10 opacity-80 dark:opacity-40"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl dark:text-yellow-200 font-semibold mb-3">Other Messaging Platforms</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/slack_logo.webp" alt="Slack Logo" height="" width="" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Slack</h5>
                </div>
                <p className="">
                  Professionals use invisible characters in Slack to improve message organization and readability. Custom 
                  spacing between sections of a message helps highlight important information, while invisible characters 
                  in channel names create a cleaner workspace appearance. Product managers and team leads often use these 
                  techniques for better information hierarchy in project updates.
                </p>
              </div>

              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/instagram_logo_icon.svg" alt="Instagram Logo" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Instagram</h5>
                </div>
                <p className="">
                  Instagram influencers rely heavily on invisible characters to create perfectly formatted captions with 
                  clean line breaks. The platform's limited formatting options make these characters essential for creating 
                  professional-looking content. Many popular accounts use invisible characters to create space between 
                  caption paragraphs and to ensure hashtags appear separated from the main text.
                </p>
              </div>

              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/facebook_icon.svg" alt="Instagram Logo" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Facebook</h5>
                </div>
                <p className="">
                  Facebook users create attention-grabbing posts with invisible characters, either posting completely blank 
                  status updates or improving the layout of longer posts. Business pages particularly benefit from this 
                  technique for creating professional-looking announcements and promotions. The improved spacing helps 
                  key information stand out, potentially increasing engagement on marketing content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Use Cases Section */}
        <div className="mb-12 bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-semibold dark:text-yellow-100 mb-6">Other Creative Use Cases</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-black dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">Documents & Forms</h4>
              </div>
              <p className="mb-4">
                Digital paperwork often comes with strict formatting requirements. Invisible characters provide 
                creative solutions for document formatting challenges, helping with character count requirements, 
                creating custom spacing in PDFs, and improving the visual layout of important documents. Many professionals 
                use these characters to optimize forms and applications.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Create precise custom spacing in digital documents</li>
                <li>Bypass minimum character requirements on applications</li>
                <li>Create invisible bookmarks in PDFs for better navigation</li>
                <li>Format text in creative ways that standard editors don't support</li>
                <li>Add invisible separators between document sections</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-black dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">Programming & Dev</h4>
              </div>
              <p className="mb-4">
                Software developers use invisible characters for specific technical purposes, including application testing, 
                string handling verification, and custom code formatting. These characters help identify potential security 
                vulnerabilities in applications and ensure proper Unicode support. QA teams also use them to test how 
                applications handle unexpected inputs.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Test string handling in applications for security purposes</li>
                <li>Create specific text alignments in code documentation</li>
                <li>Test Unicode support and internationalization features</li>
                <li>Format code comments in ways that improve readability</li>
                <li>Create obfuscated code for educational or security testing</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">Creative Design</h4>
              </div>
              <p className="mb-4">
                Graphic designers and digital artists leverage invisible characters to overcome design limitations in various 
                platforms. These characters enable unique typography layouts, creative text formatting, and visual effects 
                that would otherwise be impossible. Many award-winning designs incorporate invisible characters to achieve 
                distinctive aesthetic results.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Create artistic text layouts with precise positioning</li>
                <li>Design minimalist typography with unique spacing</li>
                <li>Achieve unusual text alignments in design applications</li>
                <li>Format text in ways that push platform boundaries</li>
                <li>Create visual rhythm in text-heavy designs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Use Cases */}
        <div className="bg-background dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-semibold dark:text-yellow-100 mb-6">Professional Applications</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Linkedin fontVariant="filled" className="text-[#0035b1] dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">LinkedIn Profile Optimization</h4>
              </div>
              <p className="mb-4">
                Career professionals use invisible characters to enhance their LinkedIn profiles, creating cleaner 
                formatting that helps key achievements stand out. Recruiters notice profiles with better visual 
                organization, and many high-performing professionals use these characters to format their experience 
                sections and recommendations for maximum impact.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Format your professional bio with clean line breaks</li>
                <li>Create visually appealing posts that stand out in the feed</li>
                <li>Add strategic spacing to make important achievements pop</li>
                <li>Create minimalist, elegant profiles that convey professionalism</li>
                <li>Format recommendation sections for better readability</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="text-red-600 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">Email Marketing & Communication</h4>
              </div>
              <p className="mb-4">
                Email marketers and business professionals use invisible characters to create clean, sophisticated email 
                formatting that improves engagement rates. These characters help create professional spacing in email 
                signatures, format newsletters effectively, and highlight key information in business communications without 
                relying on HTML that might not display correctly.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Create professional spacing in email signatures</li>
                <li>Format newsletters with precise spacing between sections</li>
                <li>Design minimalist email templates that look clean and modern</li>
                <li>Add subtle spacing to make important points stand out</li>
                <li>Create consistent formatting across email clients and devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

