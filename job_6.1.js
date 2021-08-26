// Модуль 6. Задание 1
/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, 
вызовите функцию, проанализируйте синтаксис.
*/

function countEvenOddElements(arr) {
	let countEven = 0;
	let countOdd = 0;
	let countZero = 0;
	let countNotNumber = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			if (arr[i] == 0) {
				countZero++;  
			} else if (arr[i] % 2 == 0) {
				countEven++;
			} else { 
				countOdd++;
			}
		} else {
			countNotNumber++;
		}
	}
	
	console.log(`Чётных элементов: ${countEven}`);
	console.log(`Нечётных элементов: ${countOdd}`);
	console.log(`Нулей: ${countZero}`);
	console.log(`Нечисловых элементов: ${countNotNumber}`);
};

countEvenOddElements(['стр', 0, 1, 2, , 3, 4, null, 5, '']);