import Character from "../Characters";
import Swordsman from "../Swordsman";

test('should get correct object', () => {
    const swordsman = new Swordsman('Anton', 'Swordsman');
    const expected = {
        name: 'Anton',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(swordsman).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Swordsman('A', 'Swordsman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Swordsman('LongNameOfCharacter', 'Swordsman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});