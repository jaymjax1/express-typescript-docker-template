# Database Infrastructure

This directory contains database-related infrastructure code and configurations. It provides the technical implementation details for database connections, migrations, and other database-specific concerns.

## Purpose

The database infrastructure layer:

- Manages database connections and configuration
- Handles database migrations and schema changes
- Provides database-specific utilities and helpers
- Implements database-specific error handling
- Contains database initialization and setup code

## Separation of Concerns

This directory focuses purely on database technical details, while:

- Business logic remains in the domain layer
- Data access patterns are defined in repositories
- Database-agnostic interfaces are defined in the core layer

This separation allows us to:
- Change database implementations without affecting business logic
- Manage database-specific concerns in isolation
- Keep database implementation details contained
- Maintain clean architecture principles
