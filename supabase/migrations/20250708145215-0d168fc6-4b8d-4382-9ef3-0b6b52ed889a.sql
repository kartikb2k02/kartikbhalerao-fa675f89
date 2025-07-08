
-- Create a table for blog comments
CREATE TABLE public.blog_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id INTEGER NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to allow public read access but no authentication required for posting
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to view comments
CREATE POLICY "Anyone can view comments" 
  ON public.blog_comments 
  FOR SELECT 
  USING (true);

-- Create policy that allows anyone to insert comments
CREATE POLICY "Anyone can create comments" 
  ON public.blog_comments 
  FOR INSERT 
  WITH CHECK (true);

-- Create an index for better performance when querying by blog post
CREATE INDEX idx_blog_comments_post_id ON public.blog_comments(blog_post_id);
CREATE INDEX idx_blog_comments_created_at ON public.blog_comments(created_at DESC);
