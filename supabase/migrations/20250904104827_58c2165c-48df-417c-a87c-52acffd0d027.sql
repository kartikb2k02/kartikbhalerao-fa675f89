-- Create a public view that excludes sensitive author_email data
CREATE OR REPLACE VIEW public.blog_comments_public AS 
SELECT 
  id,
  blog_post_id,
  author_name,
  content,
  created_at,
  updated_at
FROM public.blog_comments;

-- Drop the overly permissive RLS policy
DROP POLICY IF EXISTS "Public can view comment content only" ON public.blog_comments;

-- Create a more restrictive RLS policy that denies direct access to the main table
CREATE POLICY "Deny direct public access to comments table" 
ON public.blog_comments 
FOR SELECT 
USING (false);

-- Allow access to the public view (views don't inherit RLS by default)
-- The view will be accessible to everyone but only exposes safe columns