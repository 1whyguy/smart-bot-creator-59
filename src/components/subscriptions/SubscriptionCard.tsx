import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SubscriptionCardProps {
  name: string;
  price: string;
  features: string[];
  index: number;
  onSubscribe: (plan: string) => void;
}

export const SubscriptionCard = ({
  name,
  price,
  features,
  index,
  onSubscribe
}: SubscriptionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-3xl font-bold mb-6 gradient-text">{price}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center space-x-2"
            >
              <Check className="w-5 h-5 text-custom-primary" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
        <Button
          className="w-full bg-gradient-to-r from-custom-primary to-custom-secondary hover:opacity-90"
          onClick={() => onSubscribe(name)}
        >
          Выбрать план
        </Button>
      </motion.div>
    </motion.div>
  );
};