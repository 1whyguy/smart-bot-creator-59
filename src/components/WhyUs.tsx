import { Check } from "lucide-react";

export const WhyUs = () => {
  const benefits = [
    "Интуитивно понятный интерфейс для управления чатами",
    "Мгновенная модерация контента",
    "Автоматические ответы на часто задаваемые вопросы",
    "Интеграция с популярными сервисами",
    "Регулярные обновления и новые функции",
    "Круглосуточная техническая поддержка"
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Почему выбирают нас?
        </h2>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-custom-primary to-custom-secondary flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};