# Repositories

This directory contains repository implementations that serve as adapters in our hexagonal/clean architecture. Repositories implement the interfaces (ports) defined in the core domain layer and provide concrete implementations for data persistence.

## Purpose

Repositories act as a bridge between the domain layer and external data sources (like databases, APIs, etc). They:

- Implement interfaces defined in `src/core/repositories/` (e.g. `IUserRepository`)
- Handle the technical details of data persistence and retrieval
- Convert between domain models and persistence models
- Isolate the domain from infrastructure concerns

## Example

`FirebaseUserRepository.ts` implements `IUserRepository` interface and provides Firebase-specific code for persisting and retrieving User entities. This allows the core domain to remain independent of Firebase, while the repository handles all Firebase-specific logic.

This separation enables:
- Easy swapping of data storage solutions
- Better testability through mocking
- Clean separation between business logic and technical infrastructure
- Protection of the domain model from external concerns
