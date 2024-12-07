import { Brain, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Искусственный интеллект",
    description: "Использует передовые технологии ИИ для понимания ваших запросов",
  },
  {
    icon: Zap,
    title: "Мгновенные ответы",
    description: "Быстрые и точные ответы на ваши вопросы в любое время",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Ваши данные надежно защищены и никогда не передаются третьим лицам",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Преимущества нашего бота
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-telegram-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};