import Character from "../Characters";
import Undead from "../Undead";

test('should get correct object', () => {
    const undead = new Undead('Anton', 'Undead');
    const expected = {
        name: 'Anton',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(undead).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Undead('A', 'Undead');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Undead('LongNameOfCharacter', 'Undead');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});