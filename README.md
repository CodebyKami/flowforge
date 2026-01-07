# 🚀 FlowForge

**Automate Your Workflow, Amplify Your Productivity**

FlowForge is a modern SaaS automation platform that connects your favorite apps and builds powerful workflows without code. Think Zapier meets modern design.

![FlowForge Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop)

## ✨ Features

- 🎨 **Visual Workflow Builder** - Drag & drop interface for creating automation
- 🔗 **Multi-App Integration** - Connect Gmail, Slack, Sheets, Notion, GitHub, Telegram & more
- ⚡ **Real-time Execution** - Watch your workflows run in real-time
- 📊 **Execution Logs** - Detailed logs and analytics for every workflow
- 🎯 **Trigger System** - Webhooks, schedules, and manual triggers
- 📚 **Template Library** - Pre-built workflows to get started quickly
- 🌓 **Dark/Light Mode** - Beautiful UI that adapts to your preference
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **UI Components:** Shadcn UI, Radix UI
- **Workflow Engine:** React Flow
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js
- **Animations:** Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CodebyKami/flowforge.git
cd flowforge
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/flowforge"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CodebyKami/flowforge)

### Deploy to Railway

1. Connect your GitHub repository
2. Add PostgreSQL database
3. Set environment variables
4. Deploy automatically

## 🎯 Roadmap

- [x] Visual workflow builder
- [x] Basic integrations (Gmail, Slack, Sheets)
- [ ] Advanced triggers (webhooks, schedules)
- [ ] Workflow templates marketplace
- [ ] Team collaboration features
- [ ] API access for developers
- [ ] Mobile app (iOS & Android)
- [ ] AI-powered workflow suggestions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ by [CodebyKami](https://github.com/CodebyKami)