import { sayHello } from '../../src/modules/greetings';

test('Should return correct string', () => {
  expect(sayHello()).toBe('Say Hello!');
});
