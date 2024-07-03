export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

export { sum, sub }; // export module => type: named export
// export const version = 'myMath 1.0';
const version = 'myMath 1.0';

const myMath = {
	sum: sum,
	sub: sub,
	version: version,
}

export default myMath // export module => type: default export