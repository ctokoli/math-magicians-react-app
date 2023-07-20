import operate from './logic/operate';

describe('Testing for the operate function', () => {
  it('should sum the numbers', () => {
    const sum = operate(2, 2, '+');
    expect(sum).toEqual('4');
  });
});
