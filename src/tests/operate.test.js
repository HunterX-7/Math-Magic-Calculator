import operate from '../logic/operate';

describe('Tests for the operate logic', () => {
  it('Addition test: 1 + 2 = 3', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });
  it('Subtraction test: 1 - 2 = -1', () => {
    expect(operate('1', '2', '-')).toBe('-1');
  });
  it('Multiplication test: 1 x 2 = 2', () => {
    expect(operate('1', '2', 'x')).toBe('2');
  });
  it('Division test: 1 ÷ 2 = 0.5', () => {
    expect(operate('1', '2', '÷')).toBe('0.5');
  });
  it("Division test: 1 ÷ 0 = Can't divide by 0.", () => {
    expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('Remainder test: 10 % 3 = 1', () => {
    expect(operate('10', '3', '%')).toBe('1');
  });
  it("Remainder test: 10 % 0 = Can't find modulo, can't divide 0.", () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo, can't divide 0.");
  });
});
