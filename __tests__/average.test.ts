import { averageCalculator } from '../src/lib/utils';

describe('average', () => {
    it('Calcular el promedio de numeros positivos', ()=>{
        expect(averageCalculator([2,4,6])).toBe(4)
    })
});