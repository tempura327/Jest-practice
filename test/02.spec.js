import m02 from '@/model/m02.js';

// describe("test", () => {
//     test('', () => {
//         expect(m02([1, 2, 3, 4])).toBe([2, 3, 4, 5]);
//     })
// })
// jest會報錯告訴你要用.toStrictEqual

describe("test", () => {
    test('', () => {
        expect(m02([1, 2, 3, 4])).toStrictEqual([2, 3, 4, 5]);
    })
})