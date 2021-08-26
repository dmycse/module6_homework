// Модуль 6. Задание 4
/*
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. 
Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 
(всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/
function printNum(a, b) {
	let num = a;
	let intervalId = setInterval(function() {
		console.log(num);
        if (num == b) {
          clearInterval(intervalId);
      	}
		num++;
   }, 1000);
}
printNum(5, 15);

// или так 
function printNum(a, b) {
	let intervalId = setInterval(() => {
		console.log(a);
      if (a == b) {
         clearInterval(intervalId);
      }
		a++;
   }, 1000);
}
printNum(5, 15);