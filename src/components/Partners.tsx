import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const Partners = () => {
  const { toast } = useToast();

  const handlePartnerClick = () => {
    const referralLink = 'https://t.me/MyMindBot?start=referral123';
    navigator.clipboard.writeText(referralLink).then(() => {
      toast({
        title: "Успешно!",
        description: "Реферальная ссылка скопирована в буфер обмена",
      });
    }).catch(() => {
      toast({
        title: "Ваша реферальная ссылка",
        description: referralLink,
      });
    });
  };

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Партнёрская программа
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Зарабатывайте 30% с каждой оплаты приглашенного вами пользователя
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-custom-primary to-custom-secondary hover:opacity-90"
          onClick={handlePartnerClick}
        >
          <Users className="mr-2" />
          Получить реферальную ссылку
        </Button>
      </div>
    </section>
  );
};