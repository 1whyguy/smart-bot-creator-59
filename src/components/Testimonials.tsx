import { Star } from "lucide-react";

const testimonials = [
  {
    text: "MyMindBot полностью изменил способ управления нашим сообществом. Автоматизация модерации просто потрясающая!",
    author: "Александр К.",
    role: "Администратор чата",
    rating: 5
  },
  {
    text: "Лучший бот для Telegram, который я когда-либо использовал. Функционал превзошел все ожидания.",
    author: "Мария С.",
    role: "Владелец канала",
    rating: 5
  },
  {
    text: "Отличная поддержка и постоянные обновления. Видно, что команда действительно заботится о продукте.",
    author: "Дмитрий В.",
    role: "Модератор",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Отзывы пользователей
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">{testimonial.text}</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};