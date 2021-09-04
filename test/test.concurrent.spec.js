import 'regenerator-runtime/runtime'
// https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test

test.concurrent('', async () => {
    expect(5 + 3).toBe(8);
});

test.concurrent('', async () => {
    expect(5 + 3).toBeLessThan(10);
});

test.concurrent('', async () => {
    expect(10 + 20).toBeGreaterThan(20);
})

// ---------------------------------------
// test('', () => {
//     expect(5 + 3 + 3 + 3 + 33 + 33 + 33 + 3 + 10 + 10).toBe(136);
// });

// test('', () => {
//     expect(5 + 3).toBeLessThan(10);
// });

// test('', () => {
//     expect(10 + 20).toBeGreaterThan(20);
// })