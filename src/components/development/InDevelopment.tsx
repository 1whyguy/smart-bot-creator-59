import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

const initialFeatures = [
  {
    title: "Голосовые команды",
    description: "Управление ботом с помощью голосовых сообщений",
    votes: { likes: 150, dislikes: 10 }
  },
  {
    title: "Интеграция с AI",
    description: "Умные ответы на основе искусственного интеллекта",
    votes: { likes: 280, dislikes: 15 }
  },
  {
    title: "Расширенная аналитика",
    description: "Детальные отчеты и графики активности",
    votes: { likes: 200, dislikes: 5 }
  }
];

export const InDevelopment = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [features, setFeatures] = useState(initialFeatures);

  const handleVote = (feature: string, type: 'like' | 'dislike') => {
    setFeatures(prev => prev.map(f => {
      if (f.title === feature) {
        return {
          ...f,
          votes: {
            ...f.votes,
            [type === 'like' ? 'likes' : 'dislikes']: f.votes[type === 'like' ? 'likes' : 'dislikes'] + 1
          }
        };
      }
      return f;
    }));

    toast({
      title: "Голос учтен",
      description: `Вы проголосовали ${type === 'like' ? 'за' : 'против'} функции "${feature}"`,
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Успешно!",
        description: "Вы подписались на обновления",
      });
      setEmail("");
    }
  };

  return (
    <section id="in-development" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            В разработке
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Голосуйте за функции, которые хотите видеть в первую очередь
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              onVote={handleVote}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Подпишитесь на обновления
          </h3>
          <form onSubmit={handleSubscribe} className="flex gap-4">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Подписаться</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};