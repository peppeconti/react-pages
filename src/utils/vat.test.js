import { addVat } from "./vat.js";

it('addvat() - ', () => {
    expect( addVat(100) ).toEqual(123)
});

it('addvat() - ', () => {
    expect( addVat(100, 20) ).toEqual(120)
});