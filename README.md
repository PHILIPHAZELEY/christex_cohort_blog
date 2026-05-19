# Christex Foundation Cohort Blog

## What It Does

This is a simple full-stack cohort blogging platform built for the Christex Foundation community. Users can sign up, log in, create posts, and view posts on the homepage feed. User authentication and database storage are handled using Supabase.

---

## Stack Used

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase (Auth + PostgreSQL)

---

## How To Run Locally

1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

2. Install dependencies

```bash
npm install
```

3. Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. Run the development server

```bash
npm run dev
```

5. Open in browser

```text
http://localhost:4000
```

---

## One Thing The AI Got Wrong

The AI initially generated authentication and database setup correctly, but the dashboard and create-post functionality were missing completely even though the auth worked. I had to simplify the project structure and rebuild the missing routes/pages so logged-in users could actually create and view posts properly.
