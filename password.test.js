/**
 * @see password
 * @module password.test
 */

import { checkPassword } from './password';

describe('Strong Passwords', () => {
  test('Generic cases', () => {
    expect(checkPassword('Welcome12345')).toEqual('Strong Password');
    // basically a repeated test except with special characters
    expect(checkPassword('P!neappl3Ju!ce47').toEqual('Strong Password'));
  });
});

describe('Moderate Passwords', () => {
  test('Not enough characters to count as a strong password', () => {
    expect(checkPassword('Welcome1')).toEqual('Moderate Password');
  });
  test('Does not contain an uppercase letter to count as a strong password', () => {
    expect(checkPassword('welcome12345')).toEqual('Moderate Password');
  });
  test('Does not contain a lowercase letter as a strong password', () => {
    expect(checkPassword('WELCOME12345')).toEqual('Moderate Password');
  });
});

describe('Horrible Passwords', () => {
  test('Passwords on Nordpass website (generic cases)', () => {
    expect(checkPassword('123456')).toEqual('Horrible Password');
    expect(checkPassword('123456789').toEqual('Horrible Password'));
    expect(checkPassword('12345').toEqual('Horrible Password'));
    expect(checkPassword('qwerty').toEqual('Horrible Password'));
    expect(checkPassword('password').toEqual('Horrible Password'));
  });
});

describe('Poor Passwords', () => {
  test('Not enough characters to count as a moderate password', () => {
    expect(checkPassword('Welcom3')).toEqual('Poor Password');
  });
  test('Does not contain at least one letter to count as a moderate password', () => {
    expect(checkPassword('10293847')).toEqual('Poor Password');
  });
  test('Does not contain at least one number to count as a moderate password', () => {
    expect(checkPassword('Welcome!')).toEqual('Poor Password');
  });
  test('case: empty password', () => {
    expect(checkPassword('')).toEqual('Poor Password');
  });
  test('case: special characters only', () => {
    expect(checkPassword('!@#@#$#$%%^')).toEqual('Poor Password');
  });
});


