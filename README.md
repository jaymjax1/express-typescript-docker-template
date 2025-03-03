# Express TypeScript Docker Template

A production-ready template for Express.js applications with TypeScript and Docker.

## Using This Template

1. Click "Use this template" on GitHub
   - Or clone and remove git history:
   ```bash
   git clone [repository-url] your-project-name
   cd your-project-name
   rm -rf .git
   git init
   ```

2. Update package.json:
   ```bash
   # Update name, description, author, etc.
   vim package.json
   ```

3. Follow the setup steps in DEVELOPMENT.md

## Features

- TypeScript 5.5 with strict type checking
- Express.js with proper types
- Docker multi-stage builds
- Development and Production configurations
- Hot reloading in development
- Jest testing setup
- ESLint + Prettier code formatting
- Git hooks with Husky
- GitHub Actions CI pipeline
- Comprehensive documentation

## Documentation

- [Development Guide](docs/guides/DEVELOPMENT.md)
- [API Documentation](docs/guides/API.md)
- [Deployment Guide](docs/guides/DEPLOYMENT.md)
- [Contributing Guidelines](docs/community/CONTRIBUTING.md)
- [Code of Conduct](docs/community/CODE_OF_CONDUCT.md)
- [Security Policy](docs/community/SECURITY.md)

## License

MIT
