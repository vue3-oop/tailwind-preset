import { expect, test } from 'vitest'
import { add } from '@vue3-oop/tailwind-preset'

test('should work', () => {
  expect(add(1, 1)).toBe(2)
})
