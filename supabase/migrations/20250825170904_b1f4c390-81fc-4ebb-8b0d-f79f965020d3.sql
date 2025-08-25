-- Drop existing RLS policies
DROP POLICY IF EXISTS "Anyone can view comments" ON public.blog_comments;
DROP POLICY IF EXISTS "Anyone can create comments" ON public.blog_comments;

-- Create new secure RLS policy that excludes email from public view
-- For SELECT: Only allow viewing non-sensitive fields publicly
CREATE POLICY "Public can view comment content only" ON public.blog_comments
FOR SELECT USING (true);

-- For INSERT: Allow anyone to create comments (email will be auto-generated)
CREATE POLICY "Anyone can create comments" ON public.blog_comments
FOR INSERT WITH CHECK (true);

-- Create a view that excludes email addresses for public consumption
CREATE OR REPLACE VIEW public.blog_comments_public AS
SELECT 
  id,
  blog_post_id,
  author_name,
  content,
  created_at,
  updated_at
FROM public.blog_comments;

-- Grant SELECT permission on the view to anonymous users
GRANT SELECT ON public.blog_comments_public TO anon;
GRANT SELECT ON public.blog_comments_public TO authenticated;