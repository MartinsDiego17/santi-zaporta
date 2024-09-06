import { Accordion, AccordionItem } from "@nextui-org/react";

interface Contents {
  title: string;
  ariaLabel: string;
  content: string;
}[];

export const AccordionFaq = ({ content }: { content: any }) => {
  return (
    <Accordion className="dark w-full">

      {
        content.map((faqItem: any, index: number) => (
          <AccordionItem className="cel:text-balance text-tiny text-[#aaa]" key={index} aria-label={faqItem.ariaLabel} title={faqItem.title}>
            <p className="cel:text-[.9rem] pb-[1vh]">{faqItem.content}</p>
          </AccordionItem>
        ))
      }

    </Accordion>
  );
}