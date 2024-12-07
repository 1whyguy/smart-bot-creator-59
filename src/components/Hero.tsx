import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-custom-primary to-custom-secondary opacity-20 dark:opacity-30" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-custom-primary to-custom-secondary bg-clip-text text-transparent">
          Автоматизация, геймификация и управление — всё в одном Telegram-боте!
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Присоединяйтесь к MyMindBot и упростите жизнь в ваших чатах.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-custom-primary to-custom-secondary hover:opacity-90 transition-opacity"
            onClick={() => window.open("https://t.me/MyMindBot?start=connect", "_blank")}
          >
            <MessageCircle className="mr-2" />
            Подключить бота
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://t.me/MyMindBot?start=auth", "_blank")}
          >
            Авторизоваться через Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};