// import './css/style.css';
import {getBuffer, ArrayBufferConverter } from './js/array.js'


const converter = new ArrayBufferConverter(getBuffer());
console.log(converter.toString(converter.buffer));
console.log(converter.load(getBuffer()));
