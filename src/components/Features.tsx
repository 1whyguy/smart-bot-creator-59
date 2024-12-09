import { Brain, Gamepad, BarChart3, Sparkles, Users, Gem, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "./ui/animated-card";
import { AnimatedToggle } from "./ui/animated-toggle";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Управление чатами",
    subtitle: "Автоматизация модерации и управления контентом",
    imageUrl: "/placeholder.svg"
  },
  {
    icon: <Gamepad className="w-6 h-6 text-white" />,
    title: "Мини-игра",
    subtitle: "Играй и соревнуйся с друзьями в мини-игре",
    imageUrl: "/placeholder.svg"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Аналитика",
    subtitle: "Отслеживай статистику активности и прогресса",
    imageUrl: "/placeholder.svg"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Кастомизация профиля",
    subtitle: "Создавай уникальный стиль профиля",
    imageUrl: "/placeholder.svg"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Партнёрская программа",
    subtitle: "Зарабатывай бонусы за привлечение друзей",
    imageUrl: "/placeholder.svg"
  },
  {
    icon: <Gem className="w-6 h-6 text-white" />,
    title: "Подписки",
    subtitle: "Открой доступ к эксклюзивным функциям",
    imageUrl: "/placeholder.svg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что умеет MyMindBot?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя все возможности нашего бота
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              icon={feature.icon}
              imageUrl={feature.imageUrl}
              className="h-full"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <AnimatedToggle
            label="Включить расширенные функции"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};