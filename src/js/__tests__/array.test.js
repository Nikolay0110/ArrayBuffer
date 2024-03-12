import {getBuffer, ArrayBufferConverter } from '../array'

test('Проверка создания буфера с данными getBuffer()', () => {
    const expected = getBuffer();
    expect(getBuffer()).toEqual(expected);   
});


test('Проверка загрузки данных', () => {
    const converter = new ArrayBufferConverter(getBuffer());
    expect(converter.load(getBuffer())).toEqual(converter.load(getBuffer()));
});


test('Проверка преобразование буфера в строку', () => {
    const received = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
    const converter = new ArrayBufferConverter(getBuffer());
    expect(received).toEqual(converter.toString());
});

test('Проверка выброса ошибки загрузки данных', () => {
    const converter = new ArrayBufferConverter();
    expect(() => {
        converter.toString();
    }).toThrow('Не удалось загрузить ArrayByffer');
});