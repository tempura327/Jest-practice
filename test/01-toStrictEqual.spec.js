import {foo} from '@/model/m01.js'

describe("test", () => {
    test('', () => {
        expect(foo([{name:'alex', age:22}, {name:'alice', age:32}, {name:'chris', age:33}, {name:'bella', age:25}, {name:'stella', age:24}, {name:'alice', age:32}])).toStrictEqual([{name:'alex', age:22}, {name:'alice', age:32}, {name:'chris', age:33}, {name:'bella', age:25}, {name:'stella', age:24}]);
    })
})