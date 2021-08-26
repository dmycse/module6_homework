// Модуль 6. Задание 2
/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.
*/

function isPrime(num) {
	if (num <= 1000) {	
		if (isNaN(num) || num < 2) {
			return console.log('Данные не верны');
		}
		for (let i = 2; i < num; i++) {
			  if (num % i == 0) {
				  return console.log(`${num} - не является простым числом`);
				} 
		} return console.log(`${num} - простое число`);
	} return console.log('Данные не верны');
}
isPrime(0);
isPrime(5);
isPrime(197);
isPrime(433);
isPrime(511);
isPrime(1001);


//или так
function isPrime(num) {
	if (num <= 1000) {	
		if (isNaN(num) || num < 2) {
			return console.log('Данные не верны');
		}
		if (num < 4) {
			return console.log(`${num} - простое число`);
		}
		if (num % 2 == 0 || num % 3 == 0) {
			return console.log(`${num} - не является простым числом`);
		}
		for (let i = 2; i < num; i++) {
			  if (num % i == 0) {
				  return console.log(`${num} - не является простым числом`);
				} 
		} return console.log(`${num} - простое число`);
	} return console.log('Данные не верны');
}
isPrime(0);
isPrime(5);
isPrime(16);
isPrime(19);
isPrime(65);
isPrime(433);
isPrime(511);
isPrime(1001);


//или так
function isPrime(num) {
	let sqrtNum = num**(1/2);
	if (num <= 1000) {	
		if (isNaN(num) || num < 2) {
			return console.log('Данные не верны');
		}
		if (num < 4) {
			return console.log(`${num} - простое число`);
		}
		if (num % 2 == 0 || num % 3 == 0) {
			return console.log(`${num} - не является простым числом`);
		}
		
		let i = 2;
		while (i < sqrtNum) {
			if (num % i == 0) return console.log(`${num} - не является простым числом`);
			i++;
		} return console.log(`${num} - простое число`);
	} return console.log('Данные не верны');
}
isPrime(0);
isPrime(5);
isPrime(16);
isPrime(19);
isPrime(65);
isPrime(433);
isPrime(511);
isPrime(1001);