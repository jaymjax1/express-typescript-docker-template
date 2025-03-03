# Development Guide

This document outlines verification steps and common development tasks.

## Initial Setup Verification

1. Clean Installation
```bash
# Remove existing dependencies
rm -rf node_modules
yarn install
```

2. Environment Setup
```bash
# Copy and configure environment variables
cp .env.example .env
```

3. Code Quality Checks
```bash
# Type checking
yarn typecheck

# Linting
yarn lint

# Formatting
yarn format

# Run tests
yarn test
```

4. Git Hooks Verification
```bash
# Make a small change
echo "// test" >> src/app.ts
git add .
git commit -m "test: verify husky pre-commit hook"
```
Should trigger lint-staged and run formatting/linting

## Docker Verification

1. Development Environment
```bash
# Start development container
yarn docker:dev

# Verify API is running
curl http://localhost:3000/health
```

2. Production Environment
```bash
# Build and start production container
yarn docker:prod

# Verify API is running
curl http://localhost:3000/health
```

3. Docker Commands
```bash
# Stop containers
yarn docker:down

# View logs
yarn docker:logs

# Clean up
yarn docker:prune
```

## File Structure Verification

Essential files that should exist:
```
.
├── src/
│   ├── app.ts              # Main application setup
│   ├── server.ts           # Server entry point
│   └── __tests__/
│       └── app.test.ts     # Tests
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Development Docker compose
├── docker-compose.prod.yml # Production Docker compose
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Test configuration
├── .eslintrc.js          # Linting rules
├── .prettierrc           # Code formatting rules
├── .editorconfig         # Editor configuration
├── .env.example          # Example environment variables
└── .gitignore           # Git ignore rules
```

## Common Issues and Solutions

1. TypeScript Version Mismatch
```bash
# If you see TypeScript version warnings, ensure version ~5.5.0 is installed
yarn add -D typescript@~5.5.0
```

2. Linting Errors
```bash
# Fix automatic linting issues
yarn lint:fix

# Common manual fixes:
# - Add semicolons at line endings
# - Prefix unused parameters with underscore (_)
# - Remove unused imports
```

3. Test Hanging
```bash
# If tests hang, ensure server isn't started in app.ts
# Use --detectOpenHandles to debug
yarn test --detectOpenHandles
```

4. Docker Issues
```bash
# Rebuild from scratch
yarn docker:down
yarn docker:prune
yarn docker:dev

# Check logs
yarn docker:logs
```

## Development Workflow

1. Start Development
```bash
# Start development server
yarn docker:dev
```

2. Run Tests
```bash
# Run tests in watch mode
yarn test:watch
```

3. Before Committing
```bash
# Run all checks
yarn typecheck
yarn lint
yarn test
```

4. Code Style
```bash
# Format code
yarn format

# Fix linting issues
yarn lint:fix
```

## Production Deployment

1. Prepare Production Build
```bash
# Create production environment
cp .env.example .env.production

# Build and test production image
yarn docker:prod
```

2. Verify Production Build
```bash
# Check health endpoint
curl http://localhost:3000/health

# Check logs
yarn docker:logs
```

## Maintenance Tasks

1. Update Dependencies
```bash
# Check for updates
yarn upgrade-interactive --latest

# After updating, verify everything works
yarn install
yarn typecheck
yarn lint
yarn test
```

2. Clean Up
```bash
# Remove unused Docker resources
yarn docker:prune

# Clean build artifacts
rm -rf dist
``` 