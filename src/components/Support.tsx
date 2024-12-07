import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Support = () => {
  return (
    <section id="support" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Нужна помощь?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Наша команда поддержки готова помочь вам с любыми вопросами 24/7
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-custom-primary to-custom-secondary hover:opacity-90"
          onClick={() => window.open("https://t.me/MyMindBotSupport", "_blank")}
        >
          <MessageSquare className="mr-2" />
          Написать в поддержку
        </Button>
      </div>
    </section>
  );
};