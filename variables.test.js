const variables = require('../practice/variables');

describe('variables', () => {
  it('should have a variable `name` defined', () => {
    expect(variables.name).toBeTruthy();
    expect(typeof variables.name).toBe('string');
  });
  it('should have a variable `age` defined', () => {
    expect(variables.age).toBeTruthy();
    expect(typeof variables.age).toBe('number');
  });
  it('should have a variable `location` defined', () => {
    expect(variables.location).toBeTruthy();
    expect(typeof variables.location).toBe('string');
  });
  it('should have a variable `faveBook` defined', () => {
    expect(variables.faveBook).toBeTruthy();
    expect(typeof variables.faveBook).toBe('string');
  });
  it('should have a variable `faveBand` defined', () => {
    expect(variables.faveBand).toBeTruthy();
    expect(typeof variables.faveBand).toBe('string');
  });
  it('should have a variable `faveFood` defined', () => {
    expect(variables.faveFood).toBeTruthy();
    expect(typeof variables.faveFood).toBe('string');
  });
});
