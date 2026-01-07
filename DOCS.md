# 📖 FlowForge Documentation

## Table of Contents
- [Quick Start](#quick-start)
- [Features](#features)
- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Integrations](#integrations)
- [Deployment](#deployment)

## Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/CodebyKami/flowforge.git
cd flowforge
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/flowforge"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Database Setup
```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

### 🎨 Visual Workflow Builder
- Drag-and-drop interface
- Real-time preview
- Multi-step workflows
- Conditional logic

### 🔗 Integrations
- **Email:** Gmail
- **Communication:** Slack, Discord, Telegram
- **Productivity:** Notion, Google Sheets
- **Development:** GitHub
- **Project Management:** Trello

### ⚡ Execution Engine
- Real-time execution
- Scheduled workflows
- Webhook triggers
- Error handling & retry logic

### 📊 Analytics
- Execution history
- Performance metrics
- Error tracking
- Usage statistics

## Architecture

### Tech Stack
```
Frontend:
├── Next.js 14 (App Router)
├── React 18
├── TypeScript
├── Tailwind CSS
└── Framer Motion

Backend:
├── Next.js API Routes
├── Prisma ORM
├── PostgreSQL
└── NextAuth.js

Workflow Engine:
├── React Flow
├── Node-based execution
└── Event-driven architecture
```

### Database Schema
```prisma
User
├── id
├── email
├── workflows[]
└── integrations[]

Workflow
├── id
├── name
├── trigger (JSON)
├── actions (JSON)
└── executions[]

Execution
├── id
├── workflowId
├── status
├── logs (JSON)
└── timestamps
```

## API Reference

### Workflows

#### List Workflows
```typescript
GET /api/workflows
Response: { workflows: Workflow[] }
```

#### Create Workflow
```typescript
POST /api/workflows
Body: {
  name: string
  description?: string
  trigger: TriggerConfig
  actions: ActionConfig[]
}
Response: { workflow: Workflow }
```

#### Execute Workflow
```typescript
POST /api/workflows/execute
Body: { workflowId: string }
Response: { executionId: string, status: string }
```

### Integrations

#### List Integrations
```typescript
GET /api/integrations
Response: { integrations: Integration[] }
```

#### Connect Integration
```typescript
POST /api/integrations
Body: {
  name: string
  credentials: object
}
Response: { integration: Integration }
```

## Integrations

### Gmail Integration

1. **Setup:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

2. **Environment Variables:**
```env
GMAIL_CLIENT_ID=your_client_id
GMAIL_CLIENT_SECRET=your_client_secret
```

3. **Usage:**
```typescript
// Trigger: New Email
{
  type: 'gmail',
  event: 'new_email',
  filters: {
    from: 'example@gmail.com',
    subject: 'Invoice'
  }
}

// Action: Send Email
{
  type: 'gmail',
  action: 'send_email',
  config: {
    to: 'recipient@example.com',
    subject: 'Hello',
    body: 'Email content'
  }
}
```

### Slack Integration

1. **Setup:**
   - Go to [Slack API](https://api.slack.com/apps)
   - Create new app
   - Add OAuth scopes: `chat:write`, `channels:read`

2. **Environment Variables:**
```env
SLACK_CLIENT_ID=your_client_id
SLACK_CLIENT_SECRET=your_client_secret
```

3. **Usage:**
```typescript
// Action: Send Message
{
  type: 'slack',
  action: 'send_message',
  config: {
    channel: '#general',
    text: 'Hello from FlowForge!'
  }
}
```

### GitHub Integration

1. **Setup:**
   - Go to GitHub Settings > Developer settings
   - Create OAuth App
   - Set callback URL: `http://localhost:3000/api/auth/callback/github`

2. **Environment Variables:**
```env
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

3. **Usage:**
```typescript
// Trigger: New Issue
{
  type: 'github',
  event: 'issue_opened',
  repo: 'username/repo'
}

// Action: Create Issue
{
  type: 'github',
  action: 'create_issue',
  config: {
    repo: 'username/repo',
    title: 'New Issue',
    body: 'Issue description'
  }
}
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CodebyKami/flowforge)

### Quick Deploy to Railway
1. Connect GitHub repo
2. Add PostgreSQL database
3. Set environment variables
4. Deploy!

## Development

### Project Structure
```
flowforge/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── landing/          # Landing page components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
├── prisma/               # Database schema
└── public/               # Static assets
```

### Adding New Integration

1. Create integration file:
```typescript
// lib/integrations/myapp.ts
export const MyAppIntegration = {
  name: 'myapp',
  triggers: [...],
  actions: [...],
  authenticate: async (credentials) => {...},
  execute: async (action, config) => {...}
}
```

2. Add to integrations list:
```typescript
// lib/integrations/index.ts
export { MyAppIntegration } from './myapp'
```

3. Create UI component:
```typescript
// components/integrations/myapp.tsx
export function MyAppCard() {...}
```

## Support

- **Documentation:** [GitHub Wiki](https://github.com/CodebyKami/flowforge/wiki)
- **Issues:** [GitHub Issues](https://github.com/CodebyKami/flowforge/issues)
- **Discussions:** [GitHub Discussions](https://github.com/CodebyKami/flowforge/discussions)

## License

MIT License - see [LICENSE](./LICENSE) for details