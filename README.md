# Christex Foundation Cohort Blog

A modern, full-stack web application built with Next.js App Router, Supabase Postgres, and Tailwind CSS. This platform serves as a professional blogging system for Christex Foundation students and administrators.

## Features

- **Authentication**: Supabase Auth with role-based access (Admin/Student)
- **Blog Management**: Create, read, update, delete posts with rich content
- **Comments System**: Real-time comments on posts
- **Categories**: Organized content by categories
- **Responsive Design**: Modern UI with Tailwind CSS
- **Image Uploads**: Featured images via Supabase Storage
- **Admin Dashboard**: Comprehensive admin panel for content management

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd christex-cohort-blog
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Go to Settings > Database to get your service role key

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Database Schema

Run the SQL in `database/schema.sql` in your Supabase SQL Editor to create tables and policies.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Database Tables

- **profiles**: User profiles with roles
- **posts**: Blog posts with metadata
- **categories**: Post categories
- **comments**: Post comments

## Authentication

- **Admin**: Full CRUD on posts, manage categories, moderate comments
- **Student**: View posts, comment, manage own comments

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Ensure your deployment platform supports Next.js App Router and add the environment variables.

## Project Structure

```
app/
├── admin/          # Admin dashboard
├── login/          # Authentication
├── posts/          # Blog posts
└── signup/
components/         # Reusable components
lib/               # Utilities and Supabase client
database/          # Schema and migrations
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
