import Character from "../Characters";
import Zombie from "../Zombie";

test('should get correct object', () => {
    const zombie = new Zombie('Anton', 'Zombie');
    const expected = {
        name: 'Anton',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(zombie).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Zombie('A', 'Zombie');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Zombie('LongNameOfCharacter', 'Zombie');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});