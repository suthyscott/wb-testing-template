import {jest} from '@jest/globals'

// we 'mock' or create a fake version of axios that returns a reliable value every time
jest.unstable_mockModule('axios', () => {
    return {
      default: {
        get: jest.fn().mockResolvedValue({
          data: {
            results: [{ name: 'pokemon1' }, { name: 'pokemon2' }],
          },
        }),
      },
    };
  });

const mockRandom = jest.fn()
jest.unstable_mockModule('lodash', () => {
    return {
        default: {
            random: mockRandom
        }
    }
})

const {getNthPokemon, doSkillCheck} = await import('../mock-demo.js')

describe('Testing the getNthPokemon function', () => {
    test('returns pokemon2 when n = 2', async () => {
        const pokemon2 = await getNthPokemon(2)
        expect(pokemon2).toEqual({name: 'pokemon2'})
    })
})

describe('Testing the doSkillCheck function', () => {
    test('returns false for rolls of 1-9', () => {
        for(let n = 1; n <= 9; n++){
            // as we loop and generate each number, we set it as the return value for the mockRandom function that we declared on line 16.
            mockRandom.mockReturnValue(n)
            // then when we invoke doSkillCheck below, our mock function intercepts the lodash.random function and replaces it with the function we created, which returns the value on the line above.
            expect(doSkillCheck()).toBe(false)
        }
    })

    test('returns true for rolls of 10-20', () => {
        for(let n = 10; n <= 20; n++){
            mockRandom.mockReturnValue(n)
            expect(doSkillCheck()).toBe(true)
        }
    })
})