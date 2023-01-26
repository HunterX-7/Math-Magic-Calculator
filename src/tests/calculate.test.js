import calculate from '../logic/calculate';

describe('Test user interaction: AC button', () => {
  it('User clicks AC button', () => {
    const sampleData = { total: '1', next: null, operation: null };
    const expectedData = { total: null, next: null, operation: null };
    expect(calculate(sampleData, 'AC')).toStrictEqual(expectedData);
  });

  it('Should result to 42', () => {
    const operation = {
      total: 12,
      next: 30,
      operation: '+',
    };
    const output = calculate(operation, '=');
    expect(output.total).toBe('42');
  });

  it('Should result to 15', () => {
    const operation = {
      total: 5,
      next: 3,
      operation: 'x',
    };
    const output = calculate(operation, '=');
    expect(output.total).toBe('15');
  });

  it('Should result to 20', () => {
    const operation = {
      total: 40,
      next: 20,
      operation: '-',
    };
    const output = calculate(operation, '=');
    expect(output.total).toBe('20');
  });

  it('Should result to 9', () => {
    const operation = {
      total: 81,
      next: 9,
      operation: '÷',
    };
    const output = calculate(operation, '=');
    expect(output.total).toBe('9');
  });

  it('Should result 0', () => {
    const operation = {
      total: 9,
      next: 3,
      operation: '%',
    };
    const output = calculate(operation, '=');
    expect(output.total).toBe('0');
  });
});
