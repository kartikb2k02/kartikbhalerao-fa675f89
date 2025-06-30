
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export const WelcomeToast = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome message after a brief delay
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to my Portfolio! 👋",
        description: "Thanks for visiting! Feel free to explore my work and get in touch.",
        duration: 5000,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  return null;
};
