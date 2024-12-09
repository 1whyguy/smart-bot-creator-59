import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Gamepad, BarChart3, Sparkles, Users, Gem } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Управление чатами",
    description: "Автоматизация модерации и управления контентом",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Gamepad className="w-8 h-8" />,
    title: "Мини-игра",
    description: "Играй и соревнуйся с друзьями",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Аналитика",
    description: "Отслеживай статистику активности",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Кастомизация",
    description: "Создавай уникальный стиль",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Партнёрство",
    description: "Зарабатывай бонусы",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Подписки",
    description: "Доступ к эксклюзиву",
    color: "from-indigo-500 to-purple-500"
  }
];

export const FeatureCircle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 250;
  const angleStep = (2 * Math.PI) / features.length;

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-card rounded-full shadow-xl flex items-center justify-center text-center p-8"
      >
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-4"
        >
          {features[activeIndex].icon}
          <h3 className="text-2xl font-bold">{features[activeIndex].title}</h3>
          <p className="text-sm text-muted-foreground">
            {features[activeIndex].description}
          </p>
        </motion.div>
      </motion.div>

      {features.map((feature, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.button
            key={index}
            className={`absolute w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color} text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
            style={{
              left: `calc(50% + ${x}px - 40px)`,
              top: `calc(50% + ${y}px - 40px)`,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: activeIndex === index ? 1.1 : 1,
              boxShadow: activeIndex === index ? "0 0 20px rgba(0,0,0,0.3)" : "none"
            }}
            transition={{ delay: index * 0.1 }}
          >
            {feature.icon}
          </motion.button>
        );
      })}
    </div>
  );
};