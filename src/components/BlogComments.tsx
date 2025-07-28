
import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
}

interface BlogCommentsProps {
  postId: number;
}

export const BlogComments = ({ postId }: BlogCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    author_name: "",
    content: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_comments')
        .select('*')
        .eq('blog_post_id', postId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
      toast({
        title: "Error",
        description: "Failed to load comments. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author_name.trim() || !newComment.content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('blog_comments')
        .insert([{
          blog_post_id: postId,
          author_name: newComment.author_name.trim(),
          author_email: `${newComment.author_name.trim().toLowerCase().replace(/\s+/g, '')}@example.com`, // Auto-generate email
          content: newComment.content.trim()
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your comment has been posted!",
      });

      setNewComment({ author_name: "", content: "" });
      fetchComments(); // Refresh comments
    } catch (error) {
      console.error('Error submitting comment:', error);
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-slate-700/30 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Compact Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-6 space-y-3">
        <Input
          placeholder="Your name"
          value={newComment.author_name}
          onChange={(e) => setNewComment(prev => ({ ...prev, author_name: e.target.value }))}
          className="bg-white/50 dark:bg-slate-700/50 border-blue-200/50 dark:border-blue-700/50 h-10"
          required
        />
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment.content}
          onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
          className="bg-white/50 dark:bg-slate-700/50 border-blue-200/50 dark:border-blue-700/50 min-h-[80px] resize-none"
          required
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm"
        >
          <Send className="w-3 h-3 mr-1" />
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>

      {/* Compact Comments List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Loading comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-6">
            <MessageCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white/40 dark:bg-slate-700/40 rounded-lg p-4 border border-white/20 dark:border-slate-600/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {comment.author_name}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap text-sm">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
