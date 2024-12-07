import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-telegram-primary to-telegram-secondary bg-clip-text text-transparent">
        Умный Telegram Бот
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl mb-8">
        Ваш персональный помощник, который сделает вашу жизнь проще и эффективнее
      </p>
      <Button
        size="lg"
        className="bg-gradient-to-r from-telegram-primary to-telegram-secondary hover:opacity-90 transition-opacity"
        onClick={() => window.open("https://t.me/your_bot_username", "_blank")}
      >
        <MessageCircle className="mr-2" />
        Начать общение
      </Button>
    </div>
  );
};