import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как добавить бота в чат?",
    answer: "Просто перейдите по ссылке бота и нажмите кнопку 'Добавить в чат'. Выберите нужный чат и предоставьте необходимые разрешения."
  },
  {
    question: "Какие команды поддерживает бот?",
    answer: "Бот поддерживает множество команд для модерации, управления контентом и аналитики. Полный список доступен по команде /help."
  },
  {
    question: "Как настроить автомодерацию?",
    answer: "В настройках бота перейдите в раздел 'Модерация' и выберите нужные параметры фильтрации контента и действий с нарушителями."
  },
  {
    question: "Можно ли использовать бота бесплатно?",
    answer: "Да, базовый функционал бота доступен бесплатно. Для расширенных возможностей предусмотрены платные тарифы."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};