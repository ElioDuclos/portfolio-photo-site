-- Table for storing contact form submissions
-- Run this SQL in your Supabase project's SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone (for the contact form)
CREATE POLICY "Allow public to insert contact submissions"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to view all submissions
-- (useful for the site owner to see messages)
CREATE POLICY "Allow authenticated users to view contact submissions"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Optional: Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);
