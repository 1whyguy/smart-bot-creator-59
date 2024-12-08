import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-custom-primary to-custom-secondary opacity-20 dark:opacity-30" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-custom-primary to-custom-secondary bg-clip-text text-transparent animate-fade-down">
          Автоматизация, геймификация и управление — всё в одном Telegram-боте!
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-up">
          Присоединяйтесь к MyMindBot и упростите жизнь в ваших чатах.
        </p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-custom-primary to-custom-secondary hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://t.me/MyMindBot?start=connect", "_blank")}
          >
            <MessageCircle className="mr-2" />
            Подключить бота
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://t.me/MyMindBot?start=auth", "_blank")}
          >
            Авторизоваться через Telegram
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};