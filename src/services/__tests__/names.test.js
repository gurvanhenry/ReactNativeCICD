import isValidName from '../names';

test('accept name with 3 letters like "tom"', () => {
  expect(isValidName('tom')).toBe(true);
});

test('accept name with 2 letters like "li"', () => {
  expect(isValidName('li')).toBe(true);
});

test('refuse name with 1 letters like "a"', () => {
  expect(isValidName('a')).toBe(false);
});

test('refuse name with 0 letters like ""', () => {
  expect(isValidName('')).toBe(false);
});

test('refuse name if undefined', () => {
  expect(isValidName(undefined)).toBe(false);
});

test('refuse name if no parameter', () => {
  expect(isValidName()).toBe(false);
});
