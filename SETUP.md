# Setup Guide for Christex Foundation Cohort Blog

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Supabase account (free tier available)
- Git

## Step 1: Create Supabase Project

1. Visit [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Note your project details:
   - Project URL (Supabase URL)
   - Anon Key (Supabase Anon Key)
   - Service Role Key (found in Settings > API)

## Step 2: Set Up Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## Step 3: Create Database Schema

1. Go to Supabase Dashboard
2. Navigate to SQL Editor
3. Create a new query
4. Copy and paste the contents of `database/schema.sql`
5. Run the query
6. (Optional) Run `database/seed.sql` to create default categories

## Step 4: Set Up Authentication

1. In Supabase Dashboard, go to Authentication > Providers
2. Enable Email authentication (default)
3. Go to URL Configuration
4. Add your site URL (e.g., http://localhost:3000 for development)
5. Add redirect URLs:
   - http://localhost:3000/
   - http://localhost:3000/login

## Step 5: Create Admin User

1. Sign up through the app at `http://localhost:3000/signup`
2. In Supabase Dashboard, go to Authentication > Users
3. Find your user and note the UUID
4. Go to SQL Editor and run:

```sql
UPDATE profiles SET role = 'admin' WHERE id = 'your-user-uuid';
```

## Step 6: Install and Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` in your browser.

## Key Features to Test

1. **Authentication**: Sign up, sign in, sign out
2. **Create Post**: Log in as admin, go to `/admin` and create a post
3. **View Posts**: Visit `/posts` to see all posts
4. **Read Post**: Click on any post to view details
5. **Comments**: Add comments to posts
6. **Edit/Delete**: Edit or delete your own comments
7. **Admin Only**: Only admin can create/edit/delete posts

## Troubleshooting

### Database Connection Issues
- Verify environment variables are correct
- Check Supabase project status
- Ensure SQL schema was executed successfully

### Authentication Issues
- Clear browser cookies
- Check auth redirect URLs in Supabase
- Verify email confirmation is not required in auth settings

### Build Errors
- Delete `.next` folder and rebuild
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `npm install`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Other Platforms

Follow their Next.js deployment guide and ensure environment variables are configured.

## Database Schema Overview

- **profiles**: User information and roles
- **posts**: Blog posts with content
- **categories**: Post categories
- **comments**: User comments on posts

All tables have Row Level Security (RLS) enabled for data protection.

## Support

For issues or questions, consult:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)