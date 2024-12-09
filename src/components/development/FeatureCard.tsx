import { ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  votes: {
    likes: number;
    dislikes: number;
  };
  onVote: (feature: string, type: 'like' | 'dislike') => void;
}

export const FeatureCard = ({
  title,
  description,
  votes,
  onVote
}: FeatureCardProps) => {
  const [hasVoted, setHasVoted] = useState<'like' | 'dislike' | null>(null);

  const handleVote = (type: 'like' | 'dislike') => {
    if (!hasVoted) {
      setHasVoted(type);
      onVote(title, type);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm">
          👍 {votes.likes} | 👎 {votes.dislikes}
        </span>
        <div className="space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote('like')}
            disabled={hasVoted !== null}
            className={hasVoted === 'like' ? 'text-green-500' : ''}
          >
            <ThumbsUp className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleVote('dislike')}
            disabled={hasVoted !== null}
            className={hasVoted === 'dislike' ? 'text-red-500' : ''}
          >
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};