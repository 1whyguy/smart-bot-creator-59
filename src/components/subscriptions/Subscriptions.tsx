import { useToast } from "@/hooks/use-toast";
import { SubscriptionCard } from "./SubscriptionCard";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Базовый",
    price: "Бесплатно",
    features: [
      "Базовая модерация",
      "До 100 сообщений в день",
      "Основные команды",
      "Базовая аналитика"
    ]
  },
  {
    name: "Продвинутый",
    price: "499₽/мес",
    features: [
      "Все функции базового плана",
      "Неограниченные сообщения",
      "Расширенная модерация",
      "Детальная аналитика",
      "Приоритетная поддержка"
    ]
  },
  {
    name: "Премиум",
    price: "999₽/мес",
    features: [
      "Все функции продвинутого плана",
      "API доступ",
      "Индивидуальные настройки",
      "24/7 премиум поддержка",
      "Белый лейбл"
    ]
  }
];

export const Subscriptions = () => {
  const { toast } = useToast();

  const handleSubscribe = (plan: string) => {
    toast({
      title: "Подписка",
      description: `Вы выбрали план "${plan}". Функция находится в разработке.`,
    });
  };

  return (
    <section id="subscriptions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Тарифные планы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий вам план
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <SubscriptionCard
              key={index}
              {...plan}
              index={index}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};