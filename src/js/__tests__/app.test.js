import Validator from '../app.js';

describe('function validateUsername should return ', () => {
  test('true - username is correct', () => {
    const result = Validator.validateUsername('uSeR_123-sPb');
    expect(result).toBeTruthy();
  });

  test('false - not allowed cyrillic symbol', () => {
    const result = Validator.validateUsername('uSeЯR_123-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed symbol %', () => {
    const result = Validator.validateUsername('uSe%R_123-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed 4 numbers in sequence', () => {
    const result = Validator.validateUsername('uSeR_1234-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed number at the start', () => {
    const result = Validator.validateUsername('1uSeR_123-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed number at the end', () => {
    const result = Validator.validateUsername('uSeR_123-sPb1');
    expect(result).toBeFalsy();
  });

  test('false - not allowed - at the start', () => {
    const result = Validator.validateUsername('-uSeR_123-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed - at the end', () => {
    const result = Validator.validateUsername('uSeR_123-sPb-');
    expect(result).toBeFalsy();
  });

  test('false - not allowed _ at the start', () => {
    const result = Validator.validateUsername('_uSeR_123-sPb');
    expect(result).toBeFalsy();
  });

  test('false - not allowed _ at the end', () => {
    const result = Validator.validateUsername('uSeR_123-sPb_');
    expect(result).toBeFalsy();
  });
});
