
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQProps = {
  faqs: {
    title: "Frequently Asked Questions"
    items: {
      question: "What is an empty text?"
      answer: "An empty text is a Unicode character that appears blank but occupies space, allowing for unique text formatting and applications. It looks like blank space but is a character like any other letter or number."
    }
    {
      question: string
      answer: string
    },
    {
      question: string
      answer: string
    },{
      question: string
      answer: string
    },
    {
      question: string
      answer: string
    },
    {
      question: string
      answer: string
    }[]
  }
}

export default function FAQ({ dict }: FAQProps) {
  return (
    <section className="py-16">
      <div className="mx-auto">
        <h2 className="text-center text-2xl font-bold text-yellow-200 mb-8">{dict.title}</h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
          {faqs.items.map((item, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="bg-white/5 border border-white/10 rounded-lg p-2"
            >
              <AccordionTrigger className="text-yellow-100 text-xl px-2">{item.question}</AccordionTrigger>
              <AccordionContent className="text-md md:text-lg px-4 pb-4">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

