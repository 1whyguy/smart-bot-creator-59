import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Тарифные планы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6 gradient-text">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-custom-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                onClick={() => handleSubscribe(plan.name)}
              >
                Выбрать план
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};