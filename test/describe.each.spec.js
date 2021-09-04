// describe.each(table)(name, fn, timeout)

describe.each([[0,1,2], [10,11,12], [20,21,22]])('this is a name, you can skip to type it', (a, b, c) => {
    test('', () => {
        expect(a+b+c).toBe(a + a + 1 + a + 2);
    })
})