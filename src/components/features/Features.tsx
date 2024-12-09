import { motion } from "framer-motion";
import { FeatureCircle } from "./FeatureCircle";

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Что умеет MyMindBot?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя все возможности нашего бота
          </p>
        </motion.div>

        <FeatureCircle />
      </div>
    </section>
  );
};