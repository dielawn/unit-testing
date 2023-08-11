const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => expect(sum(1, 2)).toBe(3))

test('object assignment', () => {
    const data = { one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            expect( a + b).not.toBe(0)
        }
    }
})

test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeTruthy()
    expect(n).not.toBeUndefined()
    expect(n).toBeFalsy()
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3) this won't work due to rounding
    expect(value).toBeCloseTo(0.3) //so use this
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})

const compileAndroidCode = () => new Error('you are using the wrong JDK')

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    //you can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)

    //or you can math an exact error message using regexp like below
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/) //test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/) //test pass
})