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
          <AccordionItem className="tab:text-[1.3rem] cel:text-balance text-tiny text-[#aaa]" key={index} aria-label={faqItem.ariaLabel} title={faqItem.title}>
            <p className="2xl:text-[1rem] cel:text-[.9rem] pb-[1vh] tab:text-[1.1rem]">{faqItem.content}</p>
          </AccordionItem>
        ))
      }

    </Accordion>
  );
}