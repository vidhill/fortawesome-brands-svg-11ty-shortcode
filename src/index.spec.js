import { fortawesomeBrandsShortcode } from './index';

describe("test 'fortawesomeBrandsShortcode()'", () => {
    it('should be a defined function', () => {
        expect(fortawesomeBrandsShortcode).not.toBeUndefined();
        expect(fortawesomeBrandsShortcode).toBeType('function');
    });
});
