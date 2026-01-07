# Contributing to FlowForge

Thank you for your interest in contributing to FlowForge! 🎉

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/flowforge.git`
3. Create a branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values

# Set up database
npx prisma migrate dev
npx prisma generate

# Run development server
npm run dev
```

## Code Style

- Use TypeScript for type safety
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Format with Prettier (automatic)

## Adding New Integrations

1. Create integration config in `lib/integrations/`
2. Add OAuth flow if needed
3. Create API endpoints in `app/api/integrations/[name]/`
4. Add UI components in `components/integrations/`
5. Update documentation

## Testing

```bash
# Run tests (when available)
npm test

# Type check
npm run type-check

# Lint
npm run lint
```

## Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Update documentation if needed
- Add tests for new features
- Ensure all tests pass
- Follow commit message conventions

## Commit Messages

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/tooling changes

## Questions?

- Open an issue for bugs
- Start a discussion for features
- Join our Discord for chat

Thank you for contributing! 🚀