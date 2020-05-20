const validateEmail = require('../../../src/utils/validateEmail');

describe('Testing email validator', () => {
  test('should return false when email is invalid', (done) => {
    const emailOne = 'johndoegmail.com';
    const emailTwo = 'contact@domain';
    const emailThree = 'jane.doe13@domain';

    const resultOne = validateEmail(emailOne);
    const resultTwo = validateEmail(emailTwo);
    const resultThree = validateEmail(emailThree);

    expect(resultOne).toBe(false);
    expect(resultTwo).toBe(false);
    expect(resultThree).toBe(false);

    done();
  });

  test('should return true when email is valid', (done) => {
    const emailOne = 'johndoe@gmail.com';
    const emailTwo = 'contact@domain.com';
    const emailThree = 'jane.doe13@domain.edu.br';
    const emailFour = 'contact@domain.gov';

    const resultOne = validateEmail(emailOne);
    const resultTwo = validateEmail(emailTwo);
    const resultThree = validateEmail(emailThree);
    const resultFour = validateEmail(emailFour);

    expect(resultOne).toBe(true);
    expect(resultTwo).toBe(true);
    expect(resultThree).toBe(true);
    expect(resultFour).toBe(true);

    done();
  });
});
