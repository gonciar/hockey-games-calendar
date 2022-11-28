export function expectArrayEquivalence<T>(actual: T[], expected: T[]) {
  expect(actual).toEqual(expect.arrayContaining(expected));
  expect(expected).toEqual(expect.arrayContaining(actual));
}
