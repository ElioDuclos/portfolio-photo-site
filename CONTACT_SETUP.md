# Contact Form Setup

This project uses Supabase to handle contact form submissions.

## Setup Instructions

### 1. Supabase Database Setup

The contact form requires a table in your Supabase database. Run the SQL script located in `supabase/setup.sql` in your Supabase project's SQL Editor:

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to the SQL Editor
4. Copy and paste the contents of `supabase/setup.sql`
5. Run the query

This will create:
- A `contact_submissions` table to store form data
- Row Level Security (RLS) policies to allow public form submissions
- An index for better query performance

### 2. Environment Variables

Ensure your `.env` file contains the following variables (already configured):

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Testing the Form

Once the table is created, the contact form will:
- Accept name, email, and message from users
- Submit the data to Supabase
- Display success/error messages
- Clear the form after successful submission
- Disable inputs while submitting

## Viewing Submissions

To view contact form submissions:
1. Go to your Supabase Dashboard
2. Navigate to Table Editor
3. Select the `contact_submissions` table
4. View all submitted messages with timestamps

## Features

- ✅ Form validation (required fields, email format)
- ✅ Loading state during submission
- ✅ Success/error feedback messages
- ✅ Form reset after successful submission
- ✅ Disabled inputs during submission
- ✅ Secure data storage with RLS policies
