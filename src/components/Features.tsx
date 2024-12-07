import { Brain, Gamepad, BarChart3, Sparkles, Users, Gem } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Управление чатами",
    description: "Автоматизация модерации и управления контентом.",
  },
  {
    icon: Gamepad,
    title: "Мини-игра",
    description: "Играй и соревнуйся с друзьями в мини-игре.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Отслеживай статистику активности и прогресса.",
  },
  {
    icon: Sparkles,
    title: "Кастомизация профиля",
    description: "Создавай уникальный стиль профиля.",
  },
  {
    icon: Users,
    title: "Партнёрская программа",
    description: "Зарабатывай бонусы за привлечение друзей.",
  },
  {
    icon: Gem,
    title: "Подписки",
    description: "Открой доступ к эксклюзивным функциям.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Что умеет MyMindBot?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-custom-primary to-custom-secondary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};