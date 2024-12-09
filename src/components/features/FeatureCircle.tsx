import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Gamepad, BarChart3, Sparkles, Users, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Управление чатами",
    description: "Автоматизация модерации и управления контентом"
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    title: "Мини-игра",
    description: "Играй и соревнуйся с друзьями"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Аналитика",
    description: "Отслеживай статистику активности"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Кастомизация",
    description: "Создавай уникальный стиль"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Партнёрство",
    description: "Зарабатывай бонусы"
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Подписки",
    description: "Доступ к эксклюзиву"
  }
];

export const FeatureCircle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 200;
  const angleStep = (2 * Math.PI) / features.length;

  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-card rounded-full shadow-xl flex items-center justify-center text-center p-8"
      >
        <div>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-2"
          >
            {features[activeIndex].icon}
            <h3 className="text-xl font-bold">{features[activeIndex].title}</h3>
            <p className="text-sm text-muted-foreground">
              {features[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {features.map((feature, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.button
            key={index}
            className={cn(
              "absolute w-16 h-16 rounded-full flex items-center justify-center",
              "bg-gradient-to-r from-custom-primary to-custom-secondary",
              "hover:scale-110 transition-transform",
              activeIndex === index && "ring-4 ring-primary ring-offset-2"
            )}
            style={{
              left: `calc(50% + ${x}px - 32px)`,
              top: `calc(50% + ${y}px - 32px)`,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveIndex(index)}
          >
            {feature.icon}
          </motion.button>
        );
      })}
    </div>
  );
};