import { expect, test } from 'vitest';
import { factory } from './factory';

test('creates a count function', function () {
  const count = factory(1, 1);
  count();
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  count();
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  count();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('defaults to step 1, when only start is passed', function () {
  const count = factory(15);
  count();
  expect(count()).toBe(16);
  expect(count()).toBe(17);
  expect(count()).toBe(18);
});

test('decrements count correctly with negative step', function () {
  const count = factory(10, -3);
  count();
  expect(count()).toBe(7);
  expect(count()).toBe(4);
  expect(count()).toBe(1);
});
