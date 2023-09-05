function giveMeCat() {
    return "cat"
}

test("giveMeCat returns the word cat", () => {
    expect(giveMeCat()).toBe("cat")
})

describe("just new test goofin", () => {
    test("object assignment", () => {
        const data = { one: 1 }
        data.two = 2
        // toBe checks if it's literally the same object reference, toEqual checks if it has the same values.
        expect(data).toEqual({ one: 1, two: 2 })
    })

    test("a dog is not a cat", () => {
        expect("dog").not.toBe("cat")
    })
})
