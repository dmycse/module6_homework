// Модуль 6. Задание 3
/*
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.
*/

function num(a) {
	return function(b) {
		return a + b;
	}
}
let calcSum = num(4);
console.log(calcSum(6));

// или так
function num(a) {
	return function(b) {
		return a + b;
	}
}
console.log(num(4)(6));