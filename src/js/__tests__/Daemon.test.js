import Character from "../Characters";
import Daemon from "../Daemon";

test('should get correct object', () => {
    const daemon = new Daemon('Anton', 'Daemon');
    const expected = {
        name: 'Anton',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(daemon).toEqual(expected);
});

test('Проверка на короткое имя', () => {
    expect(() => {
        new Daemon('A', 'Daemon');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на длинное имя', () => {
    expect(() => {
        new Daemon('LongNameOfCharacter', 'Daemon');
    }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Проверка на некорректный тип', () => {
    expect(() => {
        new Character('Anton', 'AnotherType');
    }).toThrow('Тип должен быть в списке типов');
});