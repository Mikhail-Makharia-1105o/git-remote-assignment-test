// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import {
  getSum, getSmallestNumber, capitalize, castBoolean, countCapitalLetters,
} from '../index.js';

test('task1', () => {
  assert.strictEqual(getSum(1, 2), 3);
  assert.strictEqual(getSum(3, -5), -2);
});

test('task2', () => {
  assert.strictEqual(getSmallestNumber(0, 1000), 0);
  assert.strictEqual(getSmallestNumber(-1000, 10), -1000);
});

test('task3', () => {
  assert.strictEqual(castBoolean('Hexlet'), true);
  assert.strictEqual(castBoolean(0), false);
  assert.strictEqual(castBoolean(NaN), false);
  assert.strictEqual(castBoolean(), false);
  assert.strictEqual(castBoolean(''), false);
  assert.strictEqual(castBoolean(() => { }), true);
  assert.strictEqual(castBoolean(122343n), true);
  assert.strictEqual(castBoolean(console.log), true);
  assert.strictEqual(castBoolean(console.log()), false);
});

test('task4', () => {
  assert.strictEqual(capitalize('Hexlet', 2), 'HeXlet');
  assert.strictEqual(capitalize('Hello, world!', 22), 'Hello, world!');
  assert.strictEqual(capitalize('What`s up!', -22), 'What`s up!');
  assert.strictEqual(capitalize('Hello', 0), 'Hello');
});

test('task5', () => {
  assert.strictEqual(countCapitalLetters('Hexlet'), 1);
  assert.strictEqual(countCapitalLetters(''), 0);
  assert.strictEqual(countCapitalLetters('   a   '), 0);
  assert.strictEqual(countCapitalLetters('hello world'), 0);
  assert.strictEqual(countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'), 33);
});
