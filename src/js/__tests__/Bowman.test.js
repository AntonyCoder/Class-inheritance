import Character from "../Characters";
import Bowman from "../Bowman";

test('should get correct object', () => {
    const bowman = new Bowman('Anton', 'Bowman');
    const expected = {
        name: 'Anton',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(bowman).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Bowman('A', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Bowman('LongNameOfCharacter', 'Bowman');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});