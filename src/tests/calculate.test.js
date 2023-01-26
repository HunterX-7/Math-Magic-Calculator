import calculate from "../logic/calculate";

describe('Test user interaction: AC button', () => {
    it('User clicks AC button', () => {
        const sampleData = {total: "1", next: null, operation: null};
        const expectedData = {total: null, next: null, operation: null};
        expect(calculate(sampleData,"AC")).toStrictEqual(expectedData);
    });
});