import { sum } from './modules/math.js';
import math from './modules/math.js';

import { 
    formatDateUS, 
    formatDateUK, 
    formatDateJapanese, 
    formatDateVietnamese,
} from './modules/date.js';

console.log(`Result of sum between 1 and 2 is ${sum(1, 2)}`);
console.log("math version: ", math.version);

const handleFormatDate = (input) => {
    // input: 12/31/2021
    const parts = input.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month - 1, day);

    console.log('Định dạng Mỹ:', formatDateUS(date));
    console.log('Định dạng Anh:', formatDateUK(date));
    console.log('Định dạng Nhật Bản:', formatDateJapanese(date));
    console.log('Định dạng Việt Nam:', formatDateVietnamese(date));
}

handleFormatDate('12/31/2021');