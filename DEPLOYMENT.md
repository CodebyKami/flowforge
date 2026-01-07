# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free)
- PostgreSQL database (Railway, Supabase, or Neon)

### Step 1: Prepare Database

1. **Create PostgreSQL Database:**
   - Go to [Railway](https://railway.app) or [Supabase](https://supabase.com)
   - Create a new project
   - Create a PostgreSQL database
   - Copy the connection string

2. **Run Migrations:**
```bash
# Set your DATABASE_URL
export DATABASE_URL="postgresql://..."

# Run migrations
npx prisma migrate deploy
npx prisma generate
```

### Step 2: Deploy to Vercel

1. **Import Repository:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables:**
   Add these in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

3. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live! 🎉

### Step 3: Set Up Integrations (Optional)

For each integration you want to use:

1. **Gmail:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Add to Vercel env vars

2. **Slack:**
   - Go to [Slack API](https://api.slack.com/apps)
   - Create new app
   - Add OAuth credentials to Vercel

3. **GitHub:**
   - Go to GitHub Settings > Developer settings
   - Create OAuth App
   - Add credentials to Vercel

## Deploy to Railway

1. **Connect Repository:**
   - Go to [Railway](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Add PostgreSQL:**
   - Click "New" > "Database" > "PostgreSQL"
   - Railway will auto-configure DATABASE_URL

3. **Add Environment Variables:**
   ```
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=${{RAILWAY_PUBLIC_DOMAIN}}
   ```

4. **Deploy:**
   - Railway auto-deploys on push
   - Get your public URL from dashboard

## Local Development

```bash
# Install dependencies
npm install

# Set up database
npx prisma migrate dev
npx prisma generate

# Run development server
npm run dev
```

## Production Checklist

- [ ] Database migrations run
- [ ] Environment variables set
- [ ] OAuth apps configured
- [ ] Domain configured (optional)
- [ ] SSL certificate active
- [ ] Error tracking set up (Sentry)
- [ ] Analytics configured (optional)

## Troubleshooting

### Build Errors
- Check Node.js version (18+)
- Verify all env vars are set
- Check database connection

### Database Issues
- Verify DATABASE_URL format
- Check database is accessible
- Run migrations: `npx prisma migrate deploy`

### OAuth Issues
- Verify redirect URLs match
- Check client ID/secret
- Ensure scopes are correct

## Support

- Documentation: [docs.flowforge.com](https://github.com/CodebyKami/flowforge)
- Issues: [GitHub Issues](https://github.com/CodebyKami/flowforge/issues)
- Discord: [Join Community](https://discord.gg/flowforge)