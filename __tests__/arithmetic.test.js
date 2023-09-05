import { isEven, sum } from "../arithmetic.js"

describe('Testing the isEven function', () => {
    test('returns true for even numbers', () => {
        expect(isEven(2)).toBe(true)
    })
    
    test('returns false for odd number', () => {
        expect(isEven(3)).toBe(false)
    })
})

describe('Testing the sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3)
    })

    test('adds 1 + (-1) to equal 3', () => {
        expect(sum(1,-1)).toBe(0)
    })
})

