export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}

export class ArrayBufferConverter {
    constructor(buffer) {
        this.buffer = buffer;
    }

    load(buffer) {
        return buffer
    }

    toString() {
        if (!this.buffer) {
            throw new Error('Не удалось загрузить ArrayByffer');
        } else {
            return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
        }
    }
}


const converter = new ArrayBufferConverter(getBuffer());
console.log(converter.toString(converter.buffer));
console.log(converter.load(getBuffer()));
