<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NESTJS OFFICIAL COURSES - FUNDAMENTALS

## Description

Welcome to my personal repository for the official NestJS Fundamentals course! Throughout this journey, I explored and mastered fundamental concepts in NestJS, laying a solid foundation for building robust and scalable applications. Key aspects covered in this course include:

- **Controllers**: Handling incoming requests, managing route parameters, and effectively managing response codes.
- **Providers**: Gaining a deep understanding of dependency injection and exploring various provider types.
- **Modules**: Organizing applications into modular structures, encapsulating business logic efficiently.
- **Pipes**: Implementing custom data transformation and validation using NestJS pipes.
- **Guards**: Securing routes with guards, controlling access to different parts of the application.
- **Interceptors**: Enhancing functionality by intercepting requests and responses.
- **Exception Filters**: Handling errors gracefully using exception filters.
- **Custom Decorators**: Extending application functionality with custom decorators.
- **Middleware**: Writing middleware to intercept requests and responses.
- **Unit Testing**: Writing unit tests for NestJS applications.
- **E2E Testing**: Writing end-to-end tests for NestJS applications.
- **MongoDB**: Integrating NestJS with MongoDB.
- **PostgreSQL**: Integrating NestJS with PostgreSQL.

## Installation

clone the repo

```bash
$ git clone https://github.com/GabrielMessiasdaRosa/Official-NestJS-Courses-Fundamentals.git
```

Navigate to the branch you want to see

For the branch with Postgres

```bash
$ git checkout postgres

```

For the branch with MongoDB

```bash
$ git checkout mongo
```

After that, just run the docker compose

```bash
$ docker compose up
```

** make sure you have docker installed on your machine
** every change you make will be reflected in the container automatically
\*\* no need to install anything else just run the docker compose

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
