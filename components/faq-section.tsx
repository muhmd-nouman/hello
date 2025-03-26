import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Common questions about invisible text and how to use it
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is invisible text?</AccordionTrigger>
              <AccordionContent>
                Invisible text is created using special Unicode characters that have no visible appearance when rendered
                but still take up space in text. These include Zero Width Space (U+200B), Zero Width Non-Joiner
                (U+200C), Zero Width Joiner (U+200D), and several others. They're useful for formatting, creating
                breaks, or adding hidden metadata in text.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Where can I use invisible text?</AccordionTrigger>
              <AccordionContent>
                Invisible text can be used in many places, including social media posts, messaging apps, websites, and
                any platform that accepts Unicode text including social media posts, messaging apps, websites, and any
                platform that accepts Unicode text. Common uses include adding spacing in social media captions,
                creating 'blank' messages, formatting text in creative ways, or adding invisible separators between
                content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Are invisible characters always undetectable?</AccordionTrigger>
              <AccordionContent>
                No, while invisible characters aren't visible to the naked eye, they can be detected by various tools
                (like our Preview section). Many platforms and applications can identify invisible characters, and some
                may strip them from content. Our tool helps you test your invisible text to ensure it works as expected
                on your target platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Why are there different types of invisible characters?</AccordionTrigger>
              <AccordionContent>
                Different invisible characters serve different purposes in text rendering. For example, the Zero Width
                Joiner (ZWJ) connects characters that would otherwise be separate, while the Zero Width Non-Joiner
                (ZWNJ) prevents characters from joining. These distinctions matter in certain languages and specific
                text-rendering contexts, though for many casual uses, any invisible character will suffice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can invisible text be used for hiding messages?</AccordionTrigger>
              <AccordionContent>
                While invisible characters themselves don't contain visible content, they can be used in combination
                with visible text to create hidden messages in some contexts. However, this isn't a secure method of
                hiding information, as the text can easily be revealed by copying and pasting it into a text editor or
                using a tool like our Preview section.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

