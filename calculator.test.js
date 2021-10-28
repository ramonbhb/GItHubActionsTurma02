
const calculator = require('./calculator');

test("testando soma de 1+1", () => {
    expect(calculator.soma(1,1)).toBe(2);
});

test("testando multiplicacao de 2*2", () => {
    expect(calculator.multiplicacao(2,2)).toBe(4);
});

test("testando divisao de 10/2", () => {
    expect(calculator.divisao(10,2)).toBe(5);
});