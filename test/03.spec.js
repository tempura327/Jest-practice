import m03 from '@/model/m03.js';

describe('', () => {
    test('', () => {
        expect(m03(new Date(2021,2,2))).toBe('2021 / 3 / 2');
    })
    test('', () => {
        expect(m03(new Date(''))).toBe('failed');
    })
    test('', () => {
        expect(m03(new Date('20210202'))).toBe('failed');
    })
})

// describe('', () => {
//     test('', () => {
//         expect().toBe()
//     })
// })