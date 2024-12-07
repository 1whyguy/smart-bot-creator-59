export const HowItWorks = () => {
  const steps = [
    "Найдите бота в Telegram и добавьте его в свой чат",
    "Настройте необходимые параметры модерации",
    "Активируйте нужные функции и автоматизации",
    "Наслаждайтесь автоматическим управлением чатом"
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Как это работает?
        </h2>
        <ol className="space-y-6 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-custom-primary to-custom-secondary flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <span className="flex-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};