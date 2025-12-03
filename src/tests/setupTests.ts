// src/tests/setupTests.ts
import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './server';

// Start API mocking before all tests
beforeAll(() => server.listen());

// Reset handlers after each test (so tests don’t affect each other)
afterEach(() => server.resetHandlers());

// Clean up once the tests are done
afterAll(() => server.close());
