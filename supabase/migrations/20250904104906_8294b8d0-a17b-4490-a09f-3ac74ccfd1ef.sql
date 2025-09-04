-- Drop the existing view and recreate it without SECURITY DEFINER
DROP VIEW IF EXISTS public.blog_comments_public;

-- Create a standard view (not SECURITY DEFINER) that excludes sensitive data
CREATE VIEW public.blog_comments_public AS 
SELECT 
  id,
  blog_post_id,
  author_name,
  content,
  created_at,
  updated_at
FROM public.blog_comments;