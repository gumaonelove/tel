import { divideNum } from 'shared/lib/divideNum/divideNum';

describe('divideNum', () => {
    test('only hundreds', () => {
        expect(divideNum(300)).toBe('300');
    });

    // test('only thousands', () => {
    //     expect(divideNum(3000)).toEqual('3 000');
    // });
});
