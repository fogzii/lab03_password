import { checkPassword } from './password';

describe('Testing horrible password', () => {
  test.each([
    '123456',
    '123456789',
    '12345',
    'qwerty',
    'password',
  ])('%s', (password) => {
    expect(checkPassword(password)).toEqual('Horrible Password');
  });
});

describe('Testing poor password', () => {
  test.each([
    '',
    'a',
    'short',
    'shorts1',
    '1234567',
    '12345678',
    'eightNoNum',
    'overTwelveButNoNum',
  ])('%s', (password) => {
    expect(checkPassword(password)).toEqual('Poor Password');
  });
});

describe('Testing moderate password', () => {
  test.each([
    'a2345678',
    '2345678A',
    'eig888ht',
    '12butnoupper',
    'NOLOWERBUT12',
    'noupperbut12',
    'a23456789123',
    'comp1531',
    'COMP1531',
  ])('%s', (password) => {
    expect(checkPassword(password)).toEqual('Moderate Password');
  });
});

describe('Testing strong password', () => {
  test.each([
    'Tw3lv3L3tt3r',
    'L0ngerPassw0rdWithNumbers',
    'aA111111111111',
  ])('%s', (password) => {
    expect(checkPassword(password)).toEqual('Strong Password');
  });
});
