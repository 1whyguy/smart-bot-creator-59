import { MessageSquare, UserPlus, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Найдите бота",
    description: "Перейдите по ссылке или найдите бота в Telegram",
  },
  {
    icon: UserPlus,
    title: "Начните диалог",
    description: "Нажмите кнопку «Старт» для начала общения",
  },
  {
    icon: Sparkles,
    title: "Готово!",
    description: "Наслаждайтесь умным помощником",
  },
];

export const HowToStart = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Как начать использовать
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-telegram-primary to-telegram-secondary rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};