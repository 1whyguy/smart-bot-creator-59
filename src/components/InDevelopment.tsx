import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const futureFeatures = [
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

  const handleVote = (feature: string, type: 'like' | 'dislike') => {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          В разработке
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {futureFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  👍 {feature.votes.likes} | 👎 {feature.votes.dislikes}
                </span>
                <div className="space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(feature.title, 'like')}
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(feature.title, 'dislike')}
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto">
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
        </div>
      </div>
    </section>
  );
};